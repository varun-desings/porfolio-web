import { mySocials } from "../constants";

const Footer = () => {
  return (
  <section className="flex flex-wrap items-center justify-between
  gap-5 pb-3 text-sm text-neutral-400 c-space">
    < div className="bg-gradient-to-r from-transparent 
    via-neutral-700 to to-transparent h-[1px] w-full "/>
    <div className="flex gap-2">
    <p>Terms && Conditions</p>
    <p>|</p>
    <p>Privacy policy</p>
    </div>
    <div className="flex gap-3">
      {mySocials.map((social , index)=>(
        <a href="https://www.instagram.com/codingwith.varun/">
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
        </a>
      ))}
    </div>
    <p> @ 2025 varun . all rights reserved</p>
  </section>  
  );
};

export default Footer
