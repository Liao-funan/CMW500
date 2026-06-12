# Sending Date and Time Information to the UE

Module: LTE Signaling
Source: 26c2211cd8e14b36.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
General Configuration
 > 
Sending Date and Time Information to the UE
Sending Date and Time Information to the UE
// ***************************************************************************** 
// Select a time source and configure date, time, DST and time zone offset.
// Enable sending of the information during attach.
// Send the information to the UE now.
// ***************************************************************************** 
CONFigure:LTE:SIGN:CELL:TIME:TSOurce DATE
CONFigure:LTE:SIGN:CELL:TIME:DATE 24,10,2012
CONFigure:LTE:SIGN:CELL:TIME:TIME 12,40,30
CONFigure:LTE:SIGN:CELL:TIME:DSTime P1H
CONFigure:LTE:SIGN:CELL:TIME:LTZoffset 1
CONFigure:LTE:SIGN:CELL:TIME:SATTach ON
CONFigure:LTE:SIGN:CELL:TIME:SNOW
Top