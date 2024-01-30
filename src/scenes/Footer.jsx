import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-deep-blue pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text">
            Ethan Campbell
          </p>
          <p className="font-playfair text-md text">
            ©2023 Campbell. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
