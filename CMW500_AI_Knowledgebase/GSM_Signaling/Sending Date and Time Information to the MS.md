# Sending Date and Time Information to the MS

Module: GSM Signaling
Source: 571149d88e9a4003.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
General Configuration
 > 
Sending Date and Time Information to the MS
Sending Date and Time Information to the MS
// ***************************************************************************** 
// Select a time source and configure date, time and DST +1h and a time
// zone offset. Send the information to the MS. Enable sending time at attach.
// ***************************************************************************** 
CONFigure:GSM:SIGN:CELL:TIME:TSOurce DATE
CONFigure:GSM:SIGN:CELL:TIME:DATE 24,10,2012
CONFigure:GSM:SIGN:CELL:TIME:TIME 12,40,30
CONFigure:GSM:SIGN:CELL:TIME:DSTime P1H
CONFigure:GSM:SIGN:CELL:TIME:LTZoffset 1
CONFigure:GSM:SIGN:CELL:TIME:SNOW
CONFigure:GSM:SIGN:CELL:TIME:SATTach ON
Top