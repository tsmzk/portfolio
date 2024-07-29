import { AiOutlineX } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import Section from './Section';

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact me</h2>
        <p className="mb-8">
          お問い合わせやお仕事依頼は以下からDM等にてお願いします！
        </p>
        <div className="flex justify-center space-x-8">
          <div className="flex flex-col items-center">
            <a href="https://x.com/zakiShimyan" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <AiOutlineX size="3em" className="text-blue-500 hover:text-blue-700" />
            </a>
            <p className="mt-2">X</p>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://www.wantedly.com/id/zakiShima" target="_blank" rel="noopener noreferrer" aria-label="Wantedly">
              <BiLinkExternal size="3em" className="text-blue-500 hover:text-blue-700" />
            </a>
            <p className="mt-2">Wantedly</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
