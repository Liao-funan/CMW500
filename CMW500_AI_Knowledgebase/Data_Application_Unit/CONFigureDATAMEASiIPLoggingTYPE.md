# CONFigureDATAMEASiIPLoggingTYPE

Module: Data Application Unit
Source: 9a04f0909af04e14.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Logging
 > 
CONFigure:DATA:MEAS<i>:IPLogging:TYPE
CONFigure:DATA:MEAS<i>:IPLogging:TYPE 
<LoggingType>
Selects the interface to be monitored.
Parameters:
<LoggingType>
UPIP |
 
 UPPP |
 
 LANDau |
 
 UPMulti |
 
 UIPClient
UPIP
: IP unicast traffic from/to the DUT
UPPP
: PPP encapsulated IP traffic from/to the DUT
LANDau
: IP traffic at the LAN DAU connector
UPMulti
: IP multicast traffic to the DUT
UIPClient
: IP traffic from/to the DUT with the DAU as client
*RST:
UPIP
Example: 
See 
"Performing IP Logging"
Firmware/Software: 
V3.0.10
V3.2.40 added UPMulti, V3.5.50 added UIPClient
Options: 
R&S CMW-KA150 for multicast traffic
Manual operation: 
See 
"Logging Interface"
Top