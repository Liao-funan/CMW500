# CALCulateBLUetoothSIGNiRXQualityBER[BEDR]

Module: Bluetooth Signaling
Source: 4e43ad8b72644bed.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Command Reference
 > 
BER / PER   Measurement Commands
 > 
Measurement Results
 > 
CALCulate:BLUetooth:SIGN<i>:RXQuality:BER[:BEDR]?
CALCulate:BLUetooth:SIGN<i>:RXQuality:BER[:BEDR]? 
FETCh:BLUetooth:SIGN<i>:RXQuality:BER[:BEDR]? 
READ:BLUetooth:SIGN<i>:RXQuality:BER[:BEDR]? 
Return all results of the signaling BER measurement.
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Return values: 
<1_Reliability>
See 
"Reliability Indicator"
<2_BER>
Bit error rate
Range: 
0 %  to  100 %
Default unit: 
%
<3_PER>
Packet error rate
Default unit: 
%
<4_BitErrors>
Sum of received erroneous data bits
Range: 
0  to  184467440737096E+5
<5_MissingPackets>
Difference between the number of packets sent and the number of packets received in percentage
Default unit: 
%
<6_NAK>
Percentage of packets not acknowledged by the EUT positively
Default unit: 
%
<7_HEC_Errors>
Percentage of packets with the bit errors in the header
Default unit: 
%
<8_CRC_Errors>
Percentage of packets with the bit errors in the payload
Default unit: 
%
<9_WrongPackType>
Received packets of a different type to the one originally transmitted
Default unit: 
%
<10_WrongPaylRate>
Received packets of a different payload length to the one originally transmitted
Default unit: 
%
<11_PackReceived>
Total number of packets successfully received (without bad packets)
Range: 
0  to  200E+6
Example: 
See 
"Performing a BER/PER Measurement"
Usage: 
Query only
Firmware/Software: 
V3.2.30
Options: 
R&S CMW-KS610
Top