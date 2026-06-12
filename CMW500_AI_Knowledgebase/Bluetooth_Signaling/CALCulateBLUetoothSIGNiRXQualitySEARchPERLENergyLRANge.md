# CALCulateBLUetoothSIGNiRXQualitySEARchPERLENergyLRANge

Module: Bluetooth Signaling
Source: 38b581e588ce4f77.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Command Reference
 > 
BER Search / PER   Search Measurement Commands
 > 
Measurement Results
 > 
CALCulate:BLUetooth:SIGN<i>:RXQuality:SEARch:PER:LENergy:LRANge?
CALCulate:BLUetooth:SIGN<i>:RXQuality:SEARch:PER:LENergy:LRANge? 
CALCulate:BLUetooth:SIGN<i>:RXQuality:SEARch:PER:LENergy:LE2M? 
CALCulate:BLUetooth:SIGN<i>:RXQuality:SEARch:PER:LENergy[:LE1M]? 
FETCh:BLUetooth:SIGN<i>:RXQuality:SEARch:PER:LENergy:LRANge? 
FETCh:BLUetooth:SIGN<i>:RXQuality:SEARch:PER:LENergy:LE2M? 
FETCh:BLUetooth:SIGN<i>:RXQuality:SEARch:PER:LENergy[:LE1M]? 
READ:BLUetooth:SIGN<i>:RXQuality:SEARch:PER:LENergy:LRANge? 
READ:BLUetooth:SIGN<i>:RXQuality:SEARch:PER:LENergy:LE2M? 
READ:BLUetooth:SIGN<i>:RXQuality:SEARch:PER:LENergy[:LE1M]? 
Return all results of PER search RX measurement.
Commands for LE 1M PHY (
...:LE1M...
), LE 2M PHY (
...:LE2M...
), and LE coded PHY (
...:LRANge...
) are available.
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Return values: 
<Reliability>
See 
"Reliability Indicator"
<PER>
Packet error rate
Range: 
0 %  to  100 %
Default unit: 
%
<PacketsReceived>
Number of correct packets received and reported by the EUT
Range: 
0  to  30E+3
<SearchResult>
TX level of the R&S
 
CMW resulting in the configured PER search limit
Range: 
-1000 dBm  to  1000 dBm
Default unit: 
dBm
Example: 
See 
"Performing a BER/PER Search Measurement"
Usage: 
Query only
Firmware/Software: 
V3.5.50
V3.5.70: added commands for 
...:LE2M...
 and 
...:LRANge...
Options: 
R&S CMW-KS611
Plus R&S CMW-KS721 for LE2M and LRANge
Top