export const Img = ({ pic, alt, link = "" }: ImgType) => (
 <a href={link} target="_blank" rel="noreferrer">
  <img className="block__img" src={pic} alt={alt} />
 </a>
);

type ImgType = {
 pic: string;
 alt: string;
 link?: string;
};
