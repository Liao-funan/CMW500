# Basic Input Signal Properties EDR Packets

Module: Bluetooth Measurements
Source: 31d0548c883140dc.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Programming
 > 
Basic Input Signal Properties: EDR Packets
Basic Input Signal Properties: EDR Packets
// *************************************************************************
// Assume the EUT transmits the longest supported π/4-DQPSK packet
// type (2-DH5) with a PRBS9 payload bit pattern. Query the (maximum) 
// payload length. Disable auto synchronization. Specify and query
// the transmitted BD Address (the response is #H565634121212). 
// *************************************************************************
CONFigure:BLUetooth:MEAS:ISIGnal:DMODe MANual
CONFigure:BLUetooth:MEAS:ISIGnal:BTYPe EDR
CONFigure:BLUetooth:MEAS:ISIGnal:PTYPe:EDRate E25P
CONFigure:BLUetooth:MEAS:ISIGnal:PATTern PRBS9
CONFigure:BLUetooth:MEAS:ISIGnal:ASYNchronize OFF
CONFigure:BLUetooth:MEAS:ISIGnal:PLENgth:EDRate?
CONFigure:BLUetooth:MEAS:ISIGnal:LAP #H121212
CONFigure:BLUetooth:MEAS:ISIGnal:UAP #H34
CONFigure:BLUetooth:MEAS:ISIGnal:NAP #H5656
CONFigure:BLUetooth:MEAS:ISIGnal:BDADdress? 
// *************************************************************************
// Set the trigger source, reduce the trigger threshold and timeout
// *************************************************************************
TRIGger:BLUetooth:MEAS:MEValuation:CATalog:SOURce?
TRIGger:BLUetooth:MEAS:MEValuation:SOURce "POWer"
TRIGger:BLUetooth:MEAS:MEValuation:THREShold -25
TRIGger:BLUetooth:MEAS:MEValuation:TOUT 1
 
WAITKEY >Trigger settings completed, press "OK" to define limits<
Top