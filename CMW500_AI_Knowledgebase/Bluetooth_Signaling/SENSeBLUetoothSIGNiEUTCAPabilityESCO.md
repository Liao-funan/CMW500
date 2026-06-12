# SENSeBLUetoothSIGNiEUTCAPabilityESCO

Module: Bluetooth Signaling
Source: 69cc7b444f7142af.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Command Reference
 > 
EUT Capabilities
 > 
SENSe:BLUetooth:SIGN<i>:EUT:CAPability:ESCO?
SENSe:BLUetooth:SIGN<i>:EUT:CAPability:ESCO? 
Gets the e-SCO-related capabilities of the connected EUT. For each capability, either OFF or ON is returned
Return values: 
<EV3Packets>
OFF |
 
 ON
EV3 packets
<EV4Packets>
OFF |
 
 ON
EV4 packets
<EV5Packets>
OFF |
 
 ON
EV5 packets
<ThreeSlotEDRPck>
OFF |
 
 ON
2-EV5 / 3-EV5 packets over three slots
<EDR_2MbpsMode>
OFF |
 
 ON
2-EV3 / 2-EV5 packets
<EDR_3MbpsMode>
OFF |
 
 ON
3-EV3 / 3-EV5 packets
Example: 
See 
"Query results"
Usage: 
Query only
Firmware/Software: 
V3.5.50
Manual operation: 
See 
"Packet Type and Data Link Type Capabilities"
Top