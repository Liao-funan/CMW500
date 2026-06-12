# CONFigureGSMSIGNiTRIGgerFTMode

Module: GSM Signaling
Source: d35e35832.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Trigger Signal Settings
 > 
CONFigure:GSM:SIGN<i>:TRIGger:FTMode
CONFigure:GSM:SIGN<i>:TRIGger:FTMode 
<FrameTriggerMod>
Configures the frame trigger signal.
Parameters:
<FrameTriggerMod>
EVERy |
 
 EWIDle |
 
 M26 |
 
 M52 |
 
 M104
EVERy
: The frame trigger signal is generated for each uplink frame (single frame trigger).
EWIDle
: The frame trigger signal is generated for each uplink frame except for idle frames (single frame trigger).
M26 | M52 | M104
: The frame trigger signal is generated for each 26
th
, 52
nd
 or 104
th
 uplink frame (multiframe trigger).
*RST:
EVER
Example: 
See 
"Configuring Trigger Signals"
Firmware/Software: 
V2.0.10
Manual operation: 
See 
"Frame Trigger Mode"
Top