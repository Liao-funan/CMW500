# SENSeNIOTSIGNiUECapabilityTRANsferRFBANDsALL

Module: NBIoT Signaling
Source: c358757e88af4415.htm

## 原始指令文档说明
NB-IoT Signaling
 > 
Command Reference
 > 
UE Capabilities
 > 
SENSe:NIOT:SIGN<i>:UECapability:TRANsfer:RF:BANDs:ALL?
SENSe:NIOT:SIGN<i>:UECapability:TRANsfer:RF:BANDs:ALL? 
Returns all operating bands supported by the UE and whether the UE supports a power class with 20 dBm in a band.
For each supported band, a pair of values is returned:
{<Bands>, <PowerClass>}
1
, {<Bands>, <PowerClass>}
2
, ...
Return values: 
<Bands>
OB1 |
 
 OB2 |
 
 OB3 |
 
 OB4 |
 
 OB5 |
 
 OB7 |
 
 OB8 |
 
 OB9 |
 
 OB10 |
 
 OB11 |
 
 OB12 |
 
 OB13 |
 
 OB14 |
 
 OB17 |
 
 OB18 |
 
 OB19 |
 
 OB20 |
 
 OB21 |
 
 OB22 |
 
 OB24 |
 
 OB25 |
 
 OB26 |
 
 OB27 |
 
 OB28 |
 
 OB30 |
 
 OB31 |
 
 OB65 |
 
 OB66 |
 
 OB68 |
 
 OB70
Supported operating band
<PowerClass>
NO |
 
 YES
Support of power class with 20 dBm in the band
Example: 
See 
"Querying UE Capability Report Contents"
Usage: 
Query only
Firmware/Software: 
V3.7.20, some bands added in later releases
Manual operation: 
See 
"Supported Bands"
Top