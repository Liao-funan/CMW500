# BER Search and PER Search Rx Tests

Module: Bluetooth Signaling
Source: 9afa2975233b4c9c.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Programming
 > 
BER Search and PER Search Rx Tests
BER Search and PER Search Rx Tests
The BER search and PER search measurements provided by the "Bluetooth Signaling" application are programmed as follows:
The application is controlled by SCPI commands with the following syntax: 
...:BLUetooth:SIGN:RXQuality:SEARch:...
After a 
*RST
, the measurement is switched off. Use 
READ:BLUetooth:SIGN:RXQuality:SEARch:BER?
 or 
READ:BLUetooth:SIGN:RXQuality:SEARch:PER?
 to initiate a single-shot measurement and retrieve the results. You can also start the measurement using 
INIT:BLUetooth:SIGN:RXQuality:SEARch:BER
 or 
INIT:BLUetooth:SIGN:RXQuality:SEARch:PER
 and retrieve the results using 
FETCh:BLUetooth:SIGN:RXQuality:SEARch:BER?
 or 
FETCh:BLUetooth:SIGN:RXQuality:SEARch:PER?
.
The examples in this section focus on commands directly related to the BER and PER search measurements. For general configuration of the signaling application, refer to 
"Signaling Application"
.
Contents
Configuring a BER/PER Search Measurement
Setting Up the Connection
Performing a BER/PER Search Measurement
Top