import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET() {
	const pathdir = path.join(process.cwd(), "lib");
	console.log(pathdir);
	try {
		const file = await fs.readFile(path.join(pathdir, "projects.json"));

		const data = JSON.parse(file.toString());
		return NextResponse.json({ data }, { status: 200 });
	} catch (e) {
		console.log(e);
		return NextResponse.json({ error: "Error" }, { status: 500 });
	}
}
