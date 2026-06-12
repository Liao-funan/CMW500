# Sending Date and Time Information to the UE

Module: WCDMA Signaling
Source: b03c40dc974a407a.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
Signaling Application
 > 
Sending Date and Time Information to the UE
Sending Date and Time Information to the UE
// ***************************************************************************** 
// Select a time source and configure date, time, DST and offset +1h.
// Enable sending of the information during registration.
// Send the information to the UE now.
// ***************************************************************************** 
CONFigure:WCDMa:SIGN:CELL:TIME:TSOurce DATE
CONFigure:WCDMa:SIGN:CELL:TIME:DATE 24,10,2012
CONFigure:WCDMa:SIGN:CELL:TIME:TIME 12,40,30
CONFigure:WCDMa:SIGN:CELL:TIME:DSTime P1H
CONFigure:WCDMa:SIGN:CELL:TIME:LTZoffset 1
CONFigure:WCDMa:SIGN:CELL:TIME:SREGister ON
CONFigure:WCDMa:SIGN:CELL:TIME:SNOW
Top