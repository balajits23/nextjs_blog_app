import { NextResponse } from "next/server";
import Post from "@/model/Post";
import connect from "@/utils/db";

export const GET = async (request, { params }) => {
  try {
    await connect();

    const { id } = params;

    const post = await Post.findById(id);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    await Post.findByIdAndDelete(id);

    return new NextResponse("Post has been Deleted", { status: 200 });
  } catch (error) {
    console.log(error, "derr");
    return new NextResponse("Database Error", { status: 500 });
  }
};
