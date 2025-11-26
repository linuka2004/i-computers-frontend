import { createClient } from "@supabase/supabase-js";

const url = "https://tsxedmlsftowcsmeepfg.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzeGVkbWxzZnRvd2NzbWVlcGZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxMzcwODAsImV4cCI6MjA3OTcxMzA4MH0.fLNUMxB7IqShbXstmIbl3xkXwPf3VXC8AP3doMzZ9Uk";

const supabase = createClient(url, key);

export default function uploadFile(file) {
	return new Promise((resolve, reject) => {
		const timeStamp = Date.now();
		const fileName = timeStamp + "_" + file.name;
		supabase.storage.from("images").upload(fileName, file, {
			cacheControl: "3600",
			upsert: false,
		}).then(
            ()=>{
                const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
                resolve(publicUrl);
            }
        ).catch((error)=>{
            reject(error);
        })
	});
}