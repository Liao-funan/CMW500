# SENSeNIOTSIGNiUECapabilityTRANsferPDCPROHCALL

Module: NBIoT Signaling
Source: 16694063e3de4e57.htm

## 原始指令文档说明
NB-IoT Signaling
 > 
Command Reference
 > 
UE Capabilities
 > 
SENSe:NIOT:SIGN<i>:UECapability:TRANsfer:PDCP:ROHC:ALL?
SENSe:NIOT:SIGN<i>:UECapability:TRANsfer:PDCP:ROHC:ALL? 
Returns a list of ROHC profile support information.
For each profile, a pair of values is returned:
{<Profiles>, <Enable>}
1
, {<Profiles>, <Enable>}
2
, ...
Return values: 
<Profiles>
Name of the profile, as string, for example "Profile0x0002"
<Enable>
NO |
 
 YES
Support of the profile
Example: 
See 
"Querying UE Capability Report Contents"
Usage: 
Query only
Firmware/Software: 
V3.7.20
Manual operation: 
See 
"Supported ROHC Profiles"
Top