import { NextResponse } from "next/server";
import Post from "@/model/Post";
import connect from "@/utils/db";

export const GET = async (request) => {
  const url = new URL(request.url);

  const userName = url.searchParams.get("userName");

  try {
    await connect();

    const posts = await Post.find(userName && { userName });

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const newPost = new Post(body);

  try {
    await connect();

    await newPost.save();

    return new NextResponse("Post has been created", { status: 201 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
