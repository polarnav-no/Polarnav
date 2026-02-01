# PolarNav - Gentoo Edition v1.2 (Stable Cache) 🚢❄️

**PolarNav** is a lightweight, high-performance web-based situational awareness tool specifically designed for ice navigation in Arctic and Antarctic waters.

**v1.2 "Stable Cache"** introduces robust offline capabilities. It is optimized for operations in areas with intermittent or zero internet coverage. By combining intelligent local storage (PouchDB) with Sentinel-1 imagery, it allows navigators to "pre-load" ice charts and radar images before heading into the ice.

### 🚀 Key Features

* **🛰️ Smart Sentinel-1 Integration:** View through clouds and polar darkness with the latest SAR imagery.
* **💾 Robust Offline Caching:** The map automatically saves every satellite tile you view to your device's local database.
* **📍 Smart Tracking ("Follow Me"):**
    * Locks the view to your vessel with a maritime-style orange ship marker and heading line.
    * **Auto-Disengage:** If you drag the map to look around, tracking automatically turns off to prevent loading unnecessary data from Copernicus.
* **🧊 BarentsWatch Ice Charts:** Integrated directly via WMS for the latest ice conditions in the High North (No API key required).
* **🌍 Polar Projections:** Native support for EPSG:3995 (Arctic Polar Stereographic) to ensure accuracy at high latitudes.
* **📂 Drag-and-Drop:** Support for custom `.gpx`, `.kml`, and `.tiff` (GeoTIFF) overlays.
* **🐻 Tactical Markers:** Drop custom markers (Polar Bear, Penguin, Seal, Hazard) directly on the map.

---

### 📡 How to use the Offline Cache (The "Pre-load" Method)

To use PolarNav without internet, you must "visit" the area digitally while you still have a connection (e.g., at port or via VSAT).

1.  **Connect:** Ensure you have internet access. Check the status indicator in the top-left corner (should say **"Cache: Klar"**).
2.  **Activate LIVE Mode:** Click the Satellite button until it turns **GREEN (LIVE)**.
3.  **The "Lawn Mower" Method:**
    * Pan over the area you intend to sail in.
    * **Important:** You must Zoom IN to the detail level you need. The map only saves the specific tiles you see on screen.
    * *Tip:* Watch the status indicator. It will flash "Lagrer..." (Saving) as you move.
4.  **Go OFFLINE:** Click the Satellite button until it turns **ORANGE (OFFLINE/CACHED)**.
    * This cuts the connection to the satellite server.
    * The map will now *only* show data stored on your hard drive.
5.  **Bon Voyage:** You can now lose internet connection. As long as you stay within the zoomed/panned areas from Step 3, the satellite images will remain visible.

---

### ⚓ Developed by Mariners

This tool is built on real-world experience from the bridge of icebreakers and expedition vessels.

**The Developer's Background:**
* Chief Officer on a PC3 Icebreaker (R/V Kronprins Haakon).
* **Ice Experience:** 2x North Pole reaches, Northwest Passage transit, and numerous expeditions to the Antarctic Peninsula and the Ice Shelf.
* **Local Knowledge:** Pilotage exemption for all of Svalbard and extensive operations in East/West Greenland.

---

### 🛠 Setup & Configuration

PolarNav runs entirely in your browser. No installation required.

**1. Sentinel Hub (Satellite Imagery)**
To access high-resolution radar imagery, you need a Sentinel Hub account.
1.  Register for an account at [Copernicus Data Space / Sentinel Hub](https://dataspace.copernicus.eu/).
2.  Obtain your **API Key** (or Configuration ID).
3.  Click the **Settings (⚙️)** icon in PolarNav.
4.  Paste your key into the **Sentinel API** field.

**2. Location & Tracking**
Allow the browser to access your **Location** when prompted. The tool uses the device's GPS (or the ship's NMEA feed if forwarded to the browser via generic GNSS) to calculate SOG, COG, and Position.

---

### ⚠️ Disclaimer

**NOT FOR NAVIGATION.**
PolarNav is a situational awareness tool meant to supplement official ENC/Paper charts. Always rely on official hydrographic data and local ice pilotage for safe navigation. The developer assumes no liability for the use of this software.

**Safe sailing in the ice.** 🧊
