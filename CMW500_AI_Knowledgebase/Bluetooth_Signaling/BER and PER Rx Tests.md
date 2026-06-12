# BER and PER Rx Tests

Module: Bluetooth Signaling
Source: a6afa847f6fe4ea9.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Programming
 > 
BER and PER Rx Tests
BER and PER Rx Tests
The BER and PER measurements provided by the "Bluetooth Signaling" application are programmed as follows:
The application is controlled by SCPI commands with the following syntax: 
...:BLUetooth:SIGN:RXQuality:...
After a 
*RST
, the measurement is switched off. Use 
READ:BLUetooth:SIGN:RXQuality:BER?
 or 
READ:BLUetooth:SIGN:RXQuality:PER?
 to initiate a single-shot measurement and retrieve the results. You can also start the measurement using 
INIT:BLUetooth:SIGN:RXQuality:BER
 or 
INIT:BLUetooth:SIGN:RXQuality:PER
 and retrieve the results using 
FETCh:BLUetooth:SIGN:RXQuality:BER?
 or 
FETCh:BLUetooth:SIGN:RXQuality:PER?
.
The examples in this section focus on commands directly related to the BER and PER measurements. For general configuration of the signaling application, refer to 
"Signaling Application"
.
Contents
Configuring a BER/PER Measurement
Setting Up the Connection
Performing a BER/PER Measurement
Top