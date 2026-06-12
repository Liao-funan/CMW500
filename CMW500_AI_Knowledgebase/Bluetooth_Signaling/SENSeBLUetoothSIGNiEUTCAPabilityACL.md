# SENSeBLUetoothSIGNiEUTCAPabilityACL

Module: Bluetooth Signaling
Source: 3b1b3c0aa3504517.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Command Reference
 > 
EUT Capabilities
 > 
SENSe:BLUetooth:SIGN<i>:EUT:CAPability:ACL?
SENSe:BLUetooth:SIGN<i>:EUT:CAPability:ACL? 
Gets the ACL-related capabilities of the connected EUT. Except for the flow control lag, for each capability either OFF or ON is returned
Return values: 
<FCLag>
Flow control lag
Range: 
0 to 7
Default unit: 
256 bytes
<DH3DM3>
OFF |
 
 ON
Three-slot packets
<DH5DM5>
OFF |
 
 ON
Five-slot packets
<EDR3Slot>
OFF |
 
 ON
Three-slot EDR ACL packets
<EDR5Slot>
OFF |
 
 ON
Five-slot EDR ACL packets
<EDR2Mbps>
OFF |
 
 ON
EDR ACL 2 Mbit/s
<EDR3Mpbs>
OFF |
 
 ON
EDR ACL 3 Mbit/s
Usage: 
Query only
Firmware/Software: 
V3.0.12
Manual operation: 
See 
"Packet Type and Data Link Type Capabilities"
Top