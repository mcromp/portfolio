export const Img = ({ pic, alt }: ImgType) => (
 <img className="block__img" src={pic} alt={alt} />
);

type ImgType = {
 pic: string;
 alt: string;
};
