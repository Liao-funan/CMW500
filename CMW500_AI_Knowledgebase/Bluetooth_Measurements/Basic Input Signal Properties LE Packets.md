# Basic Input Signal Properties LE Packets

Module: Bluetooth Measurements
Source: 48ea20a196324089.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Programming
 > 
Basic Input Signal Properties: LE Packets
Basic Input Signal Properties: LE Packets
 
// *************************************************************************
// Set LE advertiser input signal. LE 1M PHY and automatic detection 
// is required. Adjust access address, set pattern and packet length. 
// *************************************************************************
CONFigure:BLUetooth:MEAS:ISIGnal:BTYPe LE
CONFigure:BLUetooth:MEAS:ISIGnal:LENergy:PHY LE1M
CONFigure:BLUetooth:MEAS:ISIGnal:PTYPe:LENergy ADV
CONFigure:BLUetooth:MEAS:ISIGnal:DMODe AUTO
CONFigure:BLUetooth:MEAS:ISIGnal:ACCaddress:LENergy #HFFFF
CONFigure:BLUetooth:MEAS:ISIGnal:PATTern:LENergy P11
CONFigure:BLUetooth:MEAS:ISIGnal:PLENgth:LENergy 37
// *************************************************************************
// Alternativelly measure LE coded PHY, set input signal. 
// Adjust access address, set pattern and packet length. 
// *************************************************************************
CONFigure:BLUetooth:MEAS:ISIGnal:BTYPe LE
CONFigure:BLUetooth:MEAS:ISIGnal:PTYPe:LENergy RFPH
CONFigure:BLUetooth:MEAS:ISIGnal:LENergy:PHY LELR
CONFigure:BLUetooth:MEAS:ISIGnal:FEC:LENergy:LRANge S8
CONFigure:BLUetooth:MEAS:ISIGnal:LENergy:SYNWord #HFFFFFFFF
CONFigure:BLUetooth:MEAS:ISIGnal:PATTern:LENergy:LRANge ALL1
CONFigure:BLUetooth:MEAS:ISIGnal:PLENgth:LENergy:LRANge 255
Top