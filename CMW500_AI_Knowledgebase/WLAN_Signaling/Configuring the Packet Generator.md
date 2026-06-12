# Configuring the Packet Generator

Module: WLAN Signaling
Source: 345d3c3a23554977.htm

## 原始指令文档说明
WLAN Signaling
 > 
Programming
 > 
Configuring the Packet Generator
Configuring the Packet Generator
// *****************************************************************************
// Enable the generator one and configure it. Set interval, packet size,
// bit pattern, TID, protocol, ports, IP version and scheduling. Enable 
// block acknowledgments for all TIDs.
// *****************************************************************************
CONFigure:WLAN:SIGN:PGEN1:CONFig ON, 110, 500, BP01, TID0
CONFigure:WLAN:SIGN:PGEN1:PROTocol UDP
CONFigure:WLAN:SIGN:PGEN1:UPORts 3001, 3005
CONFigure:WLAN:SIGN:PGEN1:IPVersion IV4
CONFigure:WLAN:SIGN:CONNection:QOS:PRIoritiz ROUR
CONFigure:WLAN:SIGN:CONNection:QOS:BLACk ON,ON,ON,ON,ON,ON,ON,ON
 
Top