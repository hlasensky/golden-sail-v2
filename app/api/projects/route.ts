import { NextResponse } from "next/server";
import fs from "fs/promises"
import path from "path";

export async function GET() {
	const pathFile = path.join(__dirname.split("app")[0], "app", "lib", "projects.json");
	console.log(__dirname)
	console.log(pathFile)
	try {
		const file = await fs.readFile(pathFile);

		const data = JSON.parse(file.toString());
		return NextResponse.json({ data }, { status: 200 });
	} catch (e) {
		console.log(e);
		return NextResponse.json({ error: "Error" }, { status: 500 });
	}
}
