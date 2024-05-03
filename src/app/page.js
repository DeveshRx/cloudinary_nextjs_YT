import Image from "next/image";
import { Cloudinary } from "@cloudinary/url-gen";
import { scale } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";

const cld = new Cloudinary({ cloud: { cloudName: process.env.CLOUDINARY_CLOUDNAME } });

export default function Home() {

  var myImageURL = cld.image("samples/cat")
    .resize(scale().width(600))
    .roundCorners(byRadius(50))
   .format('webp')
    .toURL();

  return (
    <main className="p-5 text-center">
      <h1 className="text-xl font-medium">Hello Cloudinary Images</h1>
      <Image
        className="mx-auto  "
        src={myImageURL}
        width={600}
        height={600}
        alt=""
      />
      <br />
      <p>
        {myImageURL}
      </p>
    </main>
  );
}


