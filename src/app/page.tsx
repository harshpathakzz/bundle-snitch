"use client";
import styles from "./page.module.css";
import * as THREE from "three";


export default function Home() {
  const scene = new THREE.Scene();
  console.log(scene);
  return (
    <div className={styles.page}>
     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias odit illo ducimus ab cupiditate ipsum temporibus at excepturi provident voluptates quisquam eius, debitis blanditiis perferendis. Perferendis recusandae hic non fugiat.
    </div>
  );
}
