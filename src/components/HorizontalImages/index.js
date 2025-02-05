import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

function HorizontalImages() {
  return (
    <div className={clsx(styles.horizontalImagesContainer)}>
      <Link to="https://wataame89.github.io//documents-wataameya/marshmallowPB/intro">
        <img
          src="https://booth.pximg.net/fa10e05a-2beb-4ed5-bce0-808f4aa52e0b/i/4511536/6b863807-83a9-4f67-8fb8-fcbd3d0b548e_base_resized.jpg"
          alt="Image 1"
          className={clsx(styles.imageStyle)}
        />
      </Link>
      <Link to="https://wataame89.github.io//documents-wataameya/motchiriShader/intro">
        <img
          src="https://booth.pximg.net/fa10e05a-2beb-4ed5-bce0-808f4aa52e0b/i/4108136/1d135fdd-842f-4863-b438-e352b4528ce5_base_resized.jpg"
          alt="Image 2"
          className={clsx(styles.imageStyle)}
        />
      </Link>
      <Link to="https://wataame89.github.io//documents-wataameya/blackoutShader/intro">
        <img
          src="https://booth.pximg.net/fa10e05a-2beb-4ed5-bce0-808f4aa52e0b/i/3190602/cb58678a-3cef-4b11-9656-8278d936f765_base_resized.jpg"
          alt="Image 3"
          className={clsx(styles.imageStyle)}
        />
      </Link>
      <Link to="https://wataame89.github.io//documents-wataameya/blackbodyShader/intro">
        <img
          src="https://booth.pximg.net/fa10e05a-2beb-4ed5-bce0-808f4aa52e0b/i/3698935/ad102c8b-992a-40ed-af70-02572f68e539_base_resized.jpg"
          alt="Image 4"
          className={clsx(styles.imageStyle)}
        />
      </Link>
      <Link to="https://wataame89.github.io//documents-wataameya/shadowdepthShader/intro">
        <img
          src="https://booth.pximg.net/fa10e05a-2beb-4ed5-bce0-808f4aa52e0b/i/3257870/36a30f74-adf7-4d62-8c5e-9837f9b9244d_base_resized.jpg"
          alt="Image 5"
          className={clsx(styles.imageStyle)}
        />
      </Link>
    </div>
  );
}

export default HorizontalImages;
