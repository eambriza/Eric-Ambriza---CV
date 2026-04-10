import fs from 'fs';
import path from 'path';

const cvContent = fs.readFileSync(path.join(process.cwd(), 'public', 'eric-ambriza-cv-final_3.html'), 'utf8');

export default function Home() {
  return (
    <div dangerouslySetInnerHTML={{ __html: cvContent }} />
  );
}
