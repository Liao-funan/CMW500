# SENSeBLUetoothSIGNiEUTCAPabilityCONNection

Module: Bluetooth Signaling
Source: aff392e7d1d74137.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Command Reference
 > 
EUT Capabilities
 > 
SENSe:BLUetooth:SIGN<i>:EUT:CAPability:CONNection?
SENSe:BLUetooth:SIGN<i>:EUT:CAPability:CONNection? 
Gets the connection-related properties and capabilities of the connected EUT.
Return values: 
<PageScanMode>
0X00 |
 
 0X01 |
 
 0X02 |
 
 0X03
The page scan mode that is used for default page scan:
0X00
: mandatory page scan mode
0X01
: optional page scan mode I
0X02
: optional page scan mode II
0X03
: optional page scan mode III
<PgScanPrdMode>
P0 |
 
 P1 |
 
 P2
Page scan period mode
<PgScanRepMode>
R0 |
 
 R1 |
 
 R2
Page scan repetition mode
<PScheme>
OFF |
 
 ON
"Optional paging scheme" support
<SlotOffset>
OFF |
 
 ON
"Slot offset" support
<TimingAcc>
OFF |
 
 ON
"Timing accuracy" support
<Switch>
OFF |
 
 ON
"Switching between master and slave" support
<RSSI>
OFF |
 
 ON
"Received signal strength indication" support
Usage: 
Query only
Firmware/Software: 
V3.0.12
Manual operation: 
See 
"Paging and Other Connection Capabilities"
Top