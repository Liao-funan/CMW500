# CONFigureDATAMEASiIPLoggingPSLength

Module: Data Application Unit
Source: fce327ac02094bf2.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Logging
 > 
CONFigure:DATA:MEAS<i>:IPLogging:PSLength
CONFigure:DATA:MEAS<i>:IPLogging:PSLength 
<PktSnapLength>
Configures the maximum number of bytes to be logged for each IP packet. If the packet is longer, only the specified number of bytes is logged. The remaining bytes of the packet are ignored.
The default value 0 means that no limit is defined.
Parameters:
<PktSnapLength>
Range: 
0 bytes  to  65565 bytes
*RST:
0 bytes
Default unit: 
bytes
Example: 
See 
"Performing IP Logging"
Firmware/Software: 
V3.5.20
Manual operation: 
See 
"Advanced Settings"
Top