# PolarNav - Gentoo Edition v1.0 (Mosaic) 🚢❄️

**PolarNav** is a lightweight, high-performance web-based situational awareness tool specifically designed for ice navigation in Arctic and Antarctic waters.

Built by a professional mariner for mariners, PolarNav provides free access to critical satellite imagery and ice data, ensuring that safety-critical information is available to everyone operating in the world's most demanding environments.

## 🚀 Key Features
- **Sentinel-1 Radar Integration:** View through clouds and polar darkness with the latest SAR imagery.
- **BarentsWatch Data:** High-quality ice charts and maritime data for the High North.
- **Polar Projections:** Native support for **EPSG:3995** (Arctic Polar Stereographic) to ensure accuracy at high latitudes.
- **Offline Capable:** Utilizes PouchDB and LocalStorage for caching tiles and routes.
- **Drag-and-Drop:** Support for custom `.gpx`, `.kml`, and `.tiff` (GeoTIFF) overlays.
- **No Cost:** Open-source architecture that runs entirely in your browser.

## ⚓ Developed by Mariners
This tool is built on real-world experience from the bridge of icebreakers and expedition vessels.

**The Developer's Background:**
* **Chief Officer** on a PC3 Icebreaker (**R/V Kronprins Haakon**).
* **Ice Experience:** 2x North Pole reaches, Northwest Passage transit, and numerous expeditions to the Antarctic Peninsula and the Ice Shelf.
* **Local Knowledge:** Pilotage exemption for all of Svalbard and extensive operations in East/West Greenland.

## 🛠 Setup & API Access
To keep this tool free and private, users must provide their own API keys. This ensures your data remains yours, and the service remains sustainable.

### 1. Sentinel Hub (Satellite Imagery)
1. Register for a free account at [Sentinel Hub](https://apps.sentinel-hub.com/dashboard/).
2. Create an **OAuth Client** under User Settings.
3. Copy your **Client ID** and **Client Secret** into the PolarNav settings menu (⚙️).

### 2. BarentsWatch (Ice Charts/AIS)
1. Register at [BarentsWatch API](https://www.barentswatch.no/api/pamelding).
2. Generate your API credentials and add them to the settings menu.

## ⚠️ Disclaimer
**NOT FOR NAVIGATION.** PolarNav is a situational awareness tool meant to supplement official ENC/Paper charts. Always rely on official hydrographic data and local ice pilotage for safe navigation. The developer assumes no liability for the use of this software.

---
*Safe sailing in the ice.* 🧊
