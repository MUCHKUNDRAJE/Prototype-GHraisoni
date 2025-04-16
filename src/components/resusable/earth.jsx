// CesiumHeatmapComponent.jsx
import { useEffect, useRef } from "react";
import { Viewer, Entity } from "resium";
import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

Cesium.Ion.defaultAccessToken = "YOUR_CESIUM_ION_TOKEN";

export default function CesiumHeatmapComponent() {
  const viewerRef = useRef();

  useEffect(() => {
    const viewer = viewerRef.current?.cesiumElement;

    if (!viewer) return;

    const canvas = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = 400;
    const ctx = canvas.getContext("2d");

    // Draw basic heatmap circle in canvas
    const gradient = ctx.createRadialGradient(200, 200, 0, 200, 200, 200);
    gradient.addColorStop(0, "rgba(255, 0, 0, 1)");
    gradient.addColorStop(0.5, "rgba(255, 165, 0, 0.7)");
    gradient.addColorStop(1, "rgba(255, 255, 0, 0.2)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 400, 400);

    // Convert canvas to dataURL
    const heatmapDataUrl = canvas.toDataURL();

    // Load heatmap overlay using SingleTileImageryProvider
    const heatmapLayer = viewer.imageryLayers.addImageryProvider(
      new Cesium.SingleTileImageryProvider({
        url: heatmapDataUrl,
        rectangle: Cesium.Rectangle.fromDegrees(
          75.0, // west
          19.0, // south
          79.0, // east
          23.0  // north
        ),
      })
    );

    return () => {
      viewer.imageryLayers.remove(heatmapLayer);
    };
  }, []);

  return <Viewer ref={viewerRef} full />;
}
