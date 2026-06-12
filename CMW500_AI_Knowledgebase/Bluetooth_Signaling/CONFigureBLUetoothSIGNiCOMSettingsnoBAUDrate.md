# CONFigureBLUetoothSIGNiCOMSettingsnoBAUDrate

Module: Bluetooth Signaling
Source: ed0dbe295dab4009.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Command Reference
 > 
EUT Controller Configuration
 > 
CONFigure:BLUetooth:SIGN<i>:COMSettings<no>:BAUDrate
CONFigure:BLUetooth:SIGN<i>:COMSettings<no>:BAUDrate 
<BaudRate>
Specifies the transmission parameters of serial connection.
Suffix: 
<no>
1..4
1
: HW interface for LE tests
2
: HW interface for BR / EDR tests
Parameters:
<BaudRate>
B110 |
 
 B300 |
 
 B600 |
 
 B12K |
 
 B24K |
 
 B48K |
 
 B96K |
 
 B14K |
 
 B19K |
 
 B28K |
 
 B38K |
 
 B57K |
 
 B115k |
 
 B234k |
 
 B460k |
 
 B500k |
 
 B576k |
 
 B921k |
 
 B1M |
 
 B1M5 |
 
 B2M |
 
 B3M |
 
 B3M5 |
 
 B4M
Data transmission rate in symbol: 110, 300, 600, 1200, 2400, 4800, 9600, 14400, 19200, 28800, 38400, 57600, 115200, 230400, 460800, 500000, 576000, 921600, 1000000, 1152000, 2000000, 3000000, 3500000, 4000000
*RST:
B96K
Example: 
See 
"Configure USB Interface"
Firmware/Software: 
V3.2.70
V3.5.30: added suffix 
<no>
3.5.71: added 
<BaudRate> B234k, B460, B500k, B576k, B921k, B1M, B1M5, B2M, B3M, B3M5, B4M
Manual operation: 
See 
"USB to RS232"
Top