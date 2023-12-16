import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Banner from "../../components/banner/Banner";
import Explore from "../../components/explore/Explore";
import Trendings from "../../components/trendings/Trendings";
import FeaturePart from "../../components/feature_part/FeaturePart";
import SimpleSlider from "../../components/slider/Slider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <Explore
        side_change={""}
        image={"/images/single_product_1.png.webp"}
        image_position={"-top-7"}
        image_position_2={"left-7"}
      ></Explore>
      <Explore
        side_change={"flex-row-reverse"}
        image={"/images/single_product_2.png.webp"}
        image_position={"-top-7 right-0"}
      ></Explore>
      <Explore
        side_change={""}
        image={"/images/single_product_3.png.webp"}
        image_position={"-top-7"}
        image_position_2={"left-7"}
      ></Explore>
      <Trendings></Trendings>
      <FeaturePart></FeaturePart>
      <SimpleSlider></SimpleSlider>
    </>
  );
}
