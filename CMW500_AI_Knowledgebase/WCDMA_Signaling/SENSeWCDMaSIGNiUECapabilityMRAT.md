# SENSeWCDMaSIGNiUECapabilityMRAT

Module: WCDMA Signaling
Source: 792ca081d3b54c96.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Signaling Information
 > 
UE Capabilities
 > 
SENSe:WCDMa:SIGN<i>:UECapability:MRAT?
SENSe:WCDMa:SIGN<i>:UECapability:MRAT? 
Returns UE capability information indicating the radio access technologies (RAT) that the UE supports.
Return values: 
<SupportGSM>
NO |
 
 YES
Indicates whether the UE supports GSM
<MultiCarrier>
NO |
 
 YES
Indicates whether the UE supports multi-carrier mode
<UTRANGERAN>
NO |
 
 YES
Indicates whether the UE supports UTRAN to GERAN NACC
<HandoverGAN>
NO |
 
 YES
Indicates whether the UE supports CS handover to GAN
<PSInterRAT>
NO |
 
 YES
Indicates whether the UE supports Inter-RAT PS handover
<CipherAlgUEA0>
NO |
 
 YES
Indicates whether the UE supports ciphering algorithm UEA0
<CipherAlgUEA1>
NO |
 
 YES
Indicates whether the UE supports ciphering algorithm UEA1
<IntegrityUIA1>
NO |
 
 YES
Indicates whether the UE supports integrity algorithm UIA1
<CipherAlgUEA2>
NO |
 
 YES
Indicates whether the UE supports ciphering algorithm UEA2
<IntegrityUIA2>
NO |
 
 YES
Indicates whether the UE supports integrity algorithm UIA2
<TrgtCellPreCfg>
NO |
 
 YES
Indicates whether the UE supports target cell preconfiguration
<PSHandoverGAN>
NO |
 
 YES
Indicates whether the UE supports PS handover to GAN
<EUTRAFDD>
NO |
 
 YES
Indicates whether the UE supports E-UTRA FDD
<EUTRAInterRAT>
NO |
 
 YES
Indicates whether the UE supports inter-RAT E-UTRA handover
<U2EUtraRRCIdle>
NO |
 
 YES
Indicates whether the UE supports cell reselection from UTRA CELL_PCH or URA_PCH to E-UTRA RRC_IDLE
<PrioResUTRAN>
NO |
 
 YES
Indicates whether the UE supports priority reselection in UTRAN
<EUTRAFDDCFCH>
NO |
 
 YES
Indicates whether the UE supports E-UTRA measurements and reporting for CELL_FACH for E-UTRA FDD
<EUTRATDDCFCH>
NO |
 
 YES
Indicates whether the UE supports E-UTRA measurements and reporting for CELL_FACH for E-UTRA TDD
<EUTRAMFBI>
NO |
 
 YES
Indicates whether the UE supports E-UTRA multiple frequency band indicator measurements
<WlanRanRules>
NO |
 
 YES
Indicates whether the UE supports RAN-assisted WLAN interworking RAN rules
<WlanANDSF>
NO |
 
 YES
Indicates whether the UE supports RAN-assisted WLAN interworking ANDSF policies
Example: 
See 
"Retrieving Information Provided by the UE (Signaling)"
Usage: 
Query only
Firmware/Software: 
V1.0.15.20
V3.2.10: added <CipherAlgUEA2>, <IntegrityUIA2>, <TrgtCellPreCfg>, <PSHandoverGAN>, <EUTRAFDD>, <EUTRAInterRAT>, <U2EUtraRRCIdle> and <PrioResUTRAN>
V3.7.10: added <EUTRAFDDCFCH>, <EUTRATDDCFCH>, <EUTRAMFBI>
V3.7.20: added <WlanRanRules>, <WlanANDSF>
Manual operation: 
See 
"Multi-Mode / Multi-RAT"
Top