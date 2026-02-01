PolarNav - Gentoo Edition v1.2 (Maritime Lite) 🚢❄️
PolarNav is a lightweight, high-performance web-based situational awareness tool specifically designed for ice navigation in Arctic and Antarctic waters.

v1.2 "Maritime Lite" is optimized for low-bandwidth environments. It strips away heavy external dependencies to focus purely on what matters: Your ship, the ice, and the radar image.

Built by a professional mariner for mariners, PolarNav provides access to critical satellite imagery and ice data directly in your browser, with intelligent caching to minimize data usage over satellite connections.

🚀 Key Features
🛰️ Smart Sentinel-1 Integration: View through clouds and polar darkness with the latest SAR imagery.

Data Saving: The map caches tiles automatically.

📍 Smart Tracking ("Follow Me"):

Locks the view to your vessel with a maritime-style orange ship marker and heading line.

Auto-Disengage: If you drag the map to look around, tracking automatically turns off to prevent loading unnecessary data/tiles from Copernicus.

🧊 BarentsWatch Ice Charts: Integrated directly via WMS for the latest ice conditions in the High North (No API key required).

🌍 Polar Projections: Native support for EPSG:3995 (Arctic Polar Stereographic) to ensure accuracy at high latitudes.

📱 Mobile Optimized: Improved UI layout for use on tablets and phones on the bridge.

📂 Drag-and-Drop: Support for custom .gpx, .kml, and .tiff (GeoTIFF) overlays.

🐻 Tactical Markers: Drop custom markers (Polar Bear, Penguin, Seal, Hazard) directly on the map.

⚓ Developed by Mariners
This tool is built on real-world experience from the bridge of icebreakers and expedition vessels.

The Developer's Background:

Chief Officer on a PC3 Icebreaker (R/V Kronprins Haakon).

Ice Experience: 2x North Pole reaches, Northwest Passage transit, and numerous expeditions to the Antarctic Peninsula and the Ice Shelf.

Local Knowledge: Pilotage exemption for all of Svalbard and extensive operations in East/West Greenland.

🛠 Setup & Configuration
PolarNav runs entirely in your browser. No installation required.

1. Sentinel Hub (Satellite Imagery)
To access high-resolution radar imagery, you need a Sentinel Hub account.

Register for an account at Copernicus Data Space / Sentinel Hub.

Obtain your API Key (or Configuration ID).

Click the Settings (⚙️) icon in PolarNav.

Paste your key into the Sentinel API field.

2. Location & Tracking
Allow the browser to access your Location when prompted.

The tool uses the device's GPS (or the ship's NMEA feed if forwarded to the browser via generic GNSS) to calculate SOG, COG, and Position.

⚠️ Disclaimer
NOT FOR NAVIGATION. PolarNav is a situational awareness tool meant to supplement official ENC/Paper charts. Always rely on official hydrographic data and local ice pilotage for safe navigation. The developer assumes no liability for the use of this software.

Safe sailing in the ice. 🧊
