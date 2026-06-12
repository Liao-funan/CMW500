# SENSeWLANSIGNiUECapabilityHE

Module: WLAN Signaling
Source: 0cb44dbe85d9442d.htm

## 原始指令文档说明
WLAN Signaling
 > 
Command Reference
 > 
UE Capabilities
 > 
SENSe:WLAN:SIGN<i>:UECapability:HE?
SENSe:WLAN:SIGN<i>:UECapability:HE? 
Indicates the reported UE HE capabilities.
Return values: 
<DeviceClass>
A |
 
 B
<DynFragment>
NO |
 
 L1 |
 
 L2 |
 
 L3
Dynamic fragmentation not supported, or dynamic fragmentation supported with level 1 to 3.
<ABSR>
NO |
 
 YES
Indicates support of a buffer status report (BSR) control field.
<BroadcastTWT>
NO |
 
 YES
Indicates support of broadcast target wake time (TWT) operation.
<OFDMARandAcc>
NO |
 
 YES
Indicates support of OFDMA random access procedure.
Example: 
See 
"Querying UE Information"
.
Usage: 
Query only
Firmware/Software: 
V3.7.20
Manual operation: 
See 
"Device Class"
Top