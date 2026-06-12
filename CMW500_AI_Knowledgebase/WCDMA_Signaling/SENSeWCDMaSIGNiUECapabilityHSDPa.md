# SENSeWCDMaSIGNiUECapabilityHSDPa

Module: WCDMA Signaling
Source: fe0ebffe4ff94090.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Signaling Information
 > 
UE Capabilities
 > 
SENSe:WCDMa:SIGN<i>:UECapability:HSDPa?
SENSe:WCDMa:SIGN<i>:UECapability:HSDPa? 
Returns UE capability information related to HSDPA.
Return values: 
<HSPDSCH>
NO |
 
 YES
Indicates whether the UE supports the HS-PDSCH
<DLCapHSDSCH>
Supported DPCH data rate in case an HS-DSCH is configured simultaneously
Range: 
32 kbit/s  to  384 kbit/s
Default unit: 
kbit/s
<PhysLayerCatR5>
HS-DSCH physical layer category of the UE for release 5 call setup
Range: 
1  to  24
<PhysLayerCatR7>
HS-DSCH physical layer category of the UE for release 7 call setup
Range: 
1  to  24
<PhysLayerCatR8>
HS-DSCH physical layer category of the UE for release 8 call setup
Range: 
1  to  24
<PhysLayerCatR9>
HS-DSCH physical layer category of the UE for release 9 call setup
<HSDSCHDRXOp>
NO |
 
 YES
Indicates whether the UE supports the HS-DSCH DRX operation
<HSSCCHLess>
NO |
 
 YES
Indicates whether the UE supports the HS-SCCH less operation
<CellFACH>
NO |
 
 YES
Indicates whether the UE supports HS-PDSCH in CELL_FACH state
<CellPCHURAPCH>
NO |
 
 YES
Indicates whether the UE supports the HS-PDSCH in CELL_PCH and URA_PCH states
<PhysLayerCatR10>
HS-DSCH physical layer category of the UE for release 10 call setup
Range: 
29  to  32
<MACehs>
NO |
 
 YES
Indicates whether the UE supports the MAC-ehs
<PhysLayerCatR11>
HS-DSCH physical layer category of the UE for release 11 call setup
<HSDPCCHPOffExt>
NO |
 
 YES
Indicates whether the UE supports the values 9 and 10 of deltaACK, deltaNACK and deltaCQI power offset
<DRXOp2ndC>
NO |
 
 YES
Indicates whether the UE supports HS-DSCH DRX operation with second DRX cycle in CELL_FACH state
<NBTrgHSDPCCH>
NO |
 
 YES
Indicates whether the UE supports NodeB triggered HS-DPCCH transmission in CELL_FACH state
<HSDPCCHOvHdRd>
NO |
 
 YES
Indicates whether the UE supports HS-DPCCH overhead reduction
Example: 
See 
"Retrieving Information Provided by the UE (Signaling)"
Usage: 
Query only
Firmware/Software: 
V2.1.20
V2.1.30: added <PhysLayerCatR8>
V3.2.10: added <PhysLayerCatR9>, <HSDSCHDRXOp>, <HSSCCHLess>, <CellFACH> and <CellPCHURAPCH>
V3.2.70: added <PhysLayerCatR10> and <MACehs>
V3.7.10: added <PhysLayerCatR11>, <HSDPCCHPOffExt>, <DRXOp2ndC>, <NBTrgHSDPCCH>
V3.7.20: added <HSDPCCHOvHdRd>
Manual operation: 
See 
"HSDPA"
Top