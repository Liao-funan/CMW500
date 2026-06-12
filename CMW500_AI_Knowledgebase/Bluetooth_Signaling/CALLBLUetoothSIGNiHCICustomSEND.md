# CALLBLUetoothSIGNiHCICustomSEND

Module: Bluetooth Signaling
Source: 4f7efab4ecab410f.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Command Reference
 > 
EUT Controller Configuration
 > 
CALL:BLUetooth:SIGN<i>:HCICustom:SEND
CALL:BLUetooth:SIGN<i>:HCICustom:SEND 
<CustomHCIByte>...
Sends specified bytes in hexadecimal format as an HCI command via USB interface. You can send multiple bytes separated by comma.
Setting parameters: 
<CustomHCIByte>
Comma-separated hexadecimal string
Range: 
#H0 to #HFF
*RST:
#H0
Example: 
See 
"Configure USB Interface"
Usage: 
Event
Firmware/Software: 
V3.5.60
Top