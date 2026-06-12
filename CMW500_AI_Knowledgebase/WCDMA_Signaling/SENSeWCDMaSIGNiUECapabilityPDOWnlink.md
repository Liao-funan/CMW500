# SENSeWCDMaSIGNiUECapabilityPDOWnlink

Module: WCDMA Signaling
Source: e8c83fa7c4774dfb.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Signaling Information
 > 
UE Capabilities
 > 
SENSe:WCDMa:SIGN<i>:UECapability:PDOWnlink?
SENSe:WCDMa:SIGN<i>:UECapability:PDOWnlink? 
Returns UE capability information describing the capacity of the UE to process and store downlink channels.
Return values: 
<SimultTranspCh>
Maximum number of downlink transport channels that the UE is capable to process simultaneously, not considering the rate of each transport channel
Range: 
4  to  32
<SimultCCTrCH>
Maximum number of downlink coded composite transport channels (CCTrCH) that the UE is capable to process simultaneously. Interpret CCTrCH as consisting of DCH, FACH or DSCH.
Range: 
1  to  8
<TTITranspBlock>
Maximum total number of transport blocks received within transmission time intervals (TTIs) that end within the same 10 ms interval. This value includes all transport blocks that are to be simultaneously received by the UE on DCH, FACH, PCH and DSCH transport channels.
Range: 
4  to  512
<NumberOfTFC>
Maximum number of transport format combinations (TFC) in a downlink transport format combination set that the UE can store
Range: 
16  to  1024
<NumberOfTF>
Maximum number of downlink transport formats (TF) that the UE can store, where all transport formats for all downlink transport channels are counted
Range: 
32  to  1024
<TurboDecoding>
NO |
 
 YES
Support of turbo decoding
<RXBitsAll>
Maximum number of bits of all transport blocks being received at an arbitrary time instant. All bits are considered.
Range: 
640 bits  to  163840 bits
Default unit: 
bits
<RXBitsConv>
Maximum number of bits of all transport blocks being received at an arbitrary time instant. Only convolutionally coded bits are considered.
Range: 
640 bits  to  163840 bits
Default unit: 
bits
<RXBitsTurbo>
Maximum number of bits of all transport blocks being received at an arbitrary time instant. Only turbo coded bits are considered.
Range: 
640 bits  to  163840 bits
Default unit: 
bits
<DPCCHCodes>
Maximum number of DPCH codes to be simultaneously received. For DPCH in soft/softer handover, each DPCH is only calculated once. The capability does not include codes used for S-CCPCH.
Range: 
1  to  8
<PhysicalChBits>
Maximum number of physical channel bits received in any 10 ms interval (DPCH, PDSCH, S-CCPCH). For DPCH in soft/softer handover, each DPCH is only calculated once.
Range: 
600 bits  to  76800 bits
Default unit: 
bits
<SF512>
NO |
 
 YES
Support of spreading factor (SF) 512 in downlink.
<MACiis>
NO |
 
 YES
Support of MAC-i/is entity handling E-DCH
<FDPCH>
NO |
 
 YES
Support of FDD physical channel F-DPCH
<EnhancedFDPCH>
NO |
 
 YES
Support of FDD physical channel enhanced F-DPCH
<DCHEnh>
NO |
 
 BASic |
 
 FULL
Support of DCH enhancements
<SimultDCHEnhCM>
NO |
 
 YES
Support of simultaneous DCH enhancements and CM
<SDCHEnhDPCCH>
NO |
 
 YES
Support of simultaneous DCH enhancements and DPCCH DTX
<DRXEnh>
NO |
 
 YES
Support of DRX enhancements
<DPCCH2Trx>
NO |
 
 YES
Support of FDD DPCCH2 transmission
<FTPICHFeedback>
NO |
 
 YES
Support of FDD F-TPICH feedback from the multiflow assisting cell
Example: 
See 
"Retrieving Information Provided by the UE (Signaling)"
Usage: 
Query only
Firmware/Software: 
V1.0.15.20
V3.2.10: added <MACiis>, <FDPCH> and <EnhancedFDPCH>
V3.7.20: added <DCHEnh>, <SimultDCHEnhCM>, <SDCHEnhDPCCH>, <DRXEnh>, <DPCCH2Trx>, <FTPICHFeedback>
Manual operation: 
See 
"PHY Downlink"
Top