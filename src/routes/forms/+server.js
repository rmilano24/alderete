import { readFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function GET({ params, url }) {
	const filename = url.searchParams.get('file');
	
	if (!filename) {
		return new Response('File parameter required', { status: 400 });
	}
	
	// Only allow specific files for security
	const allowedFiles = ['info_hh_co_pr_fi.pdf', 'info_hh_co_pr_fi.doc'];
	
	if (!allowedFiles.includes(filename)) {
		return new Response('File not allowed', { status: 403 });
	}
	
	try {
		const filePath = join(process.cwd(), 'static/forms', filename);
		const fileBuffer = readFileSync(filePath);
		
		const headers = {
			'Content-Type': filename.endsWith('.pdf') ? 'application/pdf' : 'application/msword',
			'Content-Disposition': `attachment; filename="${filename}"`,
			'Content-Length': fileBuffer.length.toString()
		};
		
		return new Response(fileBuffer, { headers });
	} catch (error) {
		console.error('Error serving file:', error);
		return new Response('File not found', { status: 404 });
	}
} 