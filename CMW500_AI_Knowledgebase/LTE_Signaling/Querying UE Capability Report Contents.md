# Querying UE Capability Report Contents

Module: LTE Signaling
Source: 7e385b7bab194494.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
General Configuration
 > 
Querying UE Capability Report Contents
Querying UE Capability Report Contents
// *****************************************************************************
// Query general UE capability information.
// *****************************************************************************
SENSe:LTE:SIGN:UECapability:ASRelease?
SENSe:LTE:SIGN:UECapability:UECategory?
SENSe:LTE:SIGN:UECapability:UECategory:UL?
SENSe:LTE:SIGN:UECapability:UECategory:DL?
SENSe:LTE:SIGN:UECapability:FGINdicators?
SENSe:LTE:SIGN:UECapability:FAUeeutra:FGINdicators?
SENSe:LTE:SIGN:UECapability:TAUeeutra:FGINdicators?
SENSe:LTE:SIGN:UECapability:FGINdicators:RNADd?
SENSe:LTE:SIGN:UECapability:FAUeeutra:FGINdicators:RNADd?
SENSe:LTE:SIGN:UECapability:TAUeeutra:FGINdicators:RNADd?
SENSe:LTE:SIGN:UECapability:FGINdicators:RTEN?
SENSe:LTE:SIGN:UECapability:FAUeeutra:FGINdicators:RTEN?
SENSe:LTE:SIGN:UECapability:TAUeeutra:FGINdicators:RTEN?
SENSe:LTE:SIGN:UECapability:DTYPe?
SENSe:LTE:SIGN:UECapability:RREPort?
// *****************************************************************************
// Query PDCP UE capabilities.
// *****************************************************************************
SENSe:LTE:SIGN:UECapability:PDCP:SRPRofiles?
SENSe:LTE:SIGN:UECapability:PDCP:MRCSessions?
SENSe:LTE:SIGN:UECapability:PDCP:SNEXtension?
SENSe:LTE:SIGN:UECapability:PDCP:SRCContinue?
// *****************************************************************************
// Query physical layer UE capabilities.
// *****************************************************************************
SENSe:LTE:SIGN:UECapability:PLAYer:UTASupported?
SENSe:LTE:SIGN:UECapability:FAUeeutra:PLAYer:UTASupported?
SENSe:LTE:SIGN:UECapability:TAUeeutra:PLAYer:UTASupported?
SENSe:LTE:SIGN:UECapability:PLAYer:USRSsupport?
SENSe:LTE:SIGN:UECapability:FAUeeutra:PLAYer:USRSsupport?
SENSe:LTE:SIGN:UECapability:TAUeeutra:PLAYer:USRSsupport?
SENSe:LTE:SIGN:UECapability:PLAYer:EDLFsupport?
SENSe:LTE:SIGN:UECapability:PLAYer:EDLTsupport?
SENSe:LTE:SIGN:UECapability:PLAYer:TAPPsupport?
SENSe:LTE:SIGN:UECapability:FAUeeutra:PLAYer:TAPPsupport?
SENSe:LTE:SIGN:UECapability:TAUeeutra:PLAYer:TAPPsupport?
SENSe:LTE:SIGN:UECapability:PLAYer:TWEFsupport?
SENSe:LTE:SIGN:UECapability:FAUeeutra:PLAYer:TWEFsupport?
SENSe:LTE:SIGN:UECapability:TAUeeutra:PLAYer:TWEFsupport?
SENSe:LTE:SIGN:UECapability:PLAYer:PDSupport?
SENSe:LTE:SIGN:UECapability:FAUeeutra:PLAYer:PDSupport?
SENSe:LTE:SIGN:UECapability:TAUeeutra:PLAYer:PDSupport?
SENSe:LTE:SIGN:UECapability:PLAYer:CCSSupport?
SENSe:LTE:SIGN:UECapability:FAUeeutra:PLAYer:CCSSupport?
SENSe:LTE:SIGN:UECapability:TAUeeutra:PLAYer:CCSSupport?
SENSe:LTE:SIGN:UECapability:PLAYer:SPPSupport?
SENSe:LTE:SIGN:UECapability:FAUeeutra:PLAYer:SPPSupport?
SENSe:LTE:SIGN:UECapability:TAUeeutra:PLAYer:SPPSupport?
SENSe:LTE:SIGN:UECapability:PLAYer:MCPCsupport?
SENSe:LTE:SIGN:UECapability:FAUeeutra:PLAYer:MCPCsupport?
SENSe:LTE:SIGN:UECapability:TAUeeutra:PLAYer:MCPCsupport?
SENSe:LTE:SIGN:UECapability:PLAYer:NURClist?
SENSe:LTE:SIGN:UECapability:FAUeeutra:PLAYer:NURClist?
SENSe:LTE:SIGN:UECapability:TAUeeutra:PLAYer:NURClist?
SENSe:LTE:SIGN:UECapability:PLAYer:CIHandl?
SENSe:LTE:SIGN:UECapability:PLAYer:EPDCch?
SENSe:LTE:SIGN:UECapability:PLAYer:MACReporting?
SENSe:LTE:SIGN:UECapability:PLAYer:SCIHandl?
SENSe:LTE:SIGN:UECapability:PLAYer:TSSubframe?
SENSe:LTE:SIGN:UECapability:PLAYer:TDPChselect?
SENSe:LTE:SIGN:UECapability:PLAYer:ULComp?
SENSe:LTE:SIGN:UECapability:PLAYer:ITCWithdiff?
SENSe:LTE:SIGN:UECapability:PLAYer:EHPFdd?
SENSe:LTE:SIGN:UECapability:PLAYer:EFTCodebook?
SENSe:LTE:SIGN:UECapability:PLAYer:TFCPcelldplx?
SENSe:LTE:SIGN:UECapability:PLAYer:TRCTddpcell?
SENSe:LTE:SIGN:UECapability:PLAYer:TRCFddpcell?
SENSe:LTE:SIGN:UECapability:PLAYer:PFMode?
SENSe:LTE:SIGN:UECapability:PLAYer:PSPSfset?
SENSe:LTE:SIGN:UECapability:PLAYer:CSFSet?
SENSe:LTE:SIGN:UECapability:PLAYer:NRRT?
SENSe:LTE:SIGN:UECapability:PLAYer:DSDCell?
// *****************************************************************************
// Query RF UE capabilities.
// *****************************************************************************
SENSe:LTE:SIGN:UECapability:RF:SUPPorted?
SENSe:LTE:SIGN:UECapability:RF:HDUPlex?
SENSe:LTE:SIGN:UECapability:RF:DL256?
SENSe:LTE:SIGN:UECapability:RF:UL64?
SENSe:LTE:SIGN:UECapability:RF:BCOMbination:V1020:BCSet?
SENSe:LTE:SIGN:UECapability:RF:BCOMbination:V1020:EUTRa1?
SENSe:LTE:SIGN:UECapability:RF:BCOMbination:V1020:EUTRa2?
SENSe:LTE:SIGN:UECapability:RF:BCOMbination:V1020:EUTRa3?
SENSe:LTE:SIGN:UECapability:RF:BCOMbination:V1020:EUTRa4?
SENSe:LTE:SIGN:UECapability:RF:BCOMbination:V1020:EUTRa1:BCLass:UL?
SENSe:LTE:SIGN:UECapability:RF:BCOMbination:V1020:EUTRa2:BCLass:UL?
SENSe:LTE:SIGN:UECapability:RF:BCOMbination:V1020:EUTRa3:BCLass:UL?
SENSe:LTE:SIGN:UECapability:RF:BCOMbination:V1020:EUTRa4:BCLass:UL?
SENSe:LTE:SIGN:UECapability:RF:BCOMbination:V1020:EUTRa1:BCLass:DL?
SENSe:LTE:SIGN:UECapability:RF:BCOMbination:V1020:EUTRa2:BCLass:DL?
SENSe:LTE:SIGN:UECapability:RF:BCOMbination:V1020:EUTRa3:BCLass:DL?
SENSe:LTE:SIGN:UECapability:RF:BCOMbination:V1020:EUTRa4:BCLass:DL?
SENSe:LTE:SIGN:UECapability:RF:BCOMbination:V1020:EUTRa1:MCAPability:UL?
SENSe:LTE:SIGN:UECapability:RF:BCOMbination:V1020:EUTRa2:MCAPability:UL?
SENSe:LTE:SIGN:UECapability:RF:BCOMbination:V1020:EUTRa3:MCAPability:UL?
SENSe:LTE:SIGN:UECapability:RF:BCOMbination:V1020:EUTRa4:MCAPability:UL?
SENSe:LTE:SIGN:UECapability:RF:BCOMbination:V1020:EUTRa1:MCAPability:DL?
SENSe:LTE:SIGN:UECapability:RF:BCOMbination:V1020:EUTRa2:MCAPability:DL?
SENSe:LTE:SIGN:UECapability:RF:BCOMbination:V1020:EUTRa3:MCAPability:DL?
SENSe:LTE:SIGN:UECapability:RF:BCOMbination:V1020:EUTRa4:MCAPability:DL?
SENSe:LTE:SIGN:UECapability:RF:BCOMbination:V1020:EUTRa1:SCPRoc?
SENSe:LTE:SIGN:UECapability:RF:BCOMbination:V1020:EUTRa2:SCPRoc?
SENSe:LTE:SIGN:UECapability:RF:BCOMbination:V1020:EUTRa3:SCPRoc?
SENSe:LTE:SIGN:UECapability:RF:BCOMbination:V1020:EUTRa4:SCPRoc?
SENSe:LTE:SIGN:UECapability:RF:BCOMbination:V1090:EUTRa1?
SENSe:LTE:SIGN:UECapability:RF:BCOMbination:V1090:EUTRa2?
SENSe:LTE:SIGN:UECapability:RF:BCOMbination:V1090:EUTRa3?
SENSe:LTE:SIGN:UECapability:RF:BCOMbination:V1090:EUTRa4?
SENSe:LTE:SIGN:UECapability:RF:MTADvance?
SENSe:LTE:SIGN:UECapability:RF:SRTX?
SENSe:LTE:SIGN:UECapability:RF:DCSupport:ASYNchronous?
SENSe:LTE:SIGN:UECapability:RF:DCSupport:SCGRouping?
SENSe:LTE:SIGN:UECapability:RF:SNCap?
SENSe:LTE:SIGN:UECapability:RF:FBRetrieval?
SENSe:LTE:SIGN:UECapability:RF:RBANds?
SENSe:LTE:SIGN:UECapability:RF:FBPadjust?
SENSe:LTE:SIGN:UECapability:RF:MMPRbehavior?
// *****************************************************************************
// Query measurement UE capabilities.
// *****************************************************************************
SENSe:LTE:SIGN:UECapability:MEAS:IFNGaps?
SENSe:LTE:SIGN:UECapability:MEAS:IRNGaps:UFDD?
SENSe:LTE:SIGN:UECapability:MEAS:IRNGaps:UTDD128?
SENSe:LTE:SIGN:UECapability:MEAS:IRNGaps:GERan?
SENSe:LTE:SIGN:UECapability:MEAS:IRNGaps:CHRPd?
SENSe:LTE:SIGN:UECapability:MEAS:IRNGaps:CXRTt?
SENSe:LTE:SIGN:UECapability:MEAS:IFNGaps:V1020?
SENSe:LTE:SIGN:UECapability:MEAS:IRNGaps:V1020:UFDD?
SENSe:LTE:SIGN:UECapability:MEAS:IRNGaps:V1020:UTDD128?
SENSe:LTE:SIGN:UECapability:MEAS:IRNGaps:V1020:GERan?
SENSe:LTE:SIGN:UECapability:MEAS:IRNGaps:V1020:CHRPd?
SENSe:LTE:SIGN:UECapability:MEAS:IRNGaps:V1020:CXRTt?
SENSe:LTE:SIGN:UECapability:MEAS:RMWideband?
SENSe:LTE:SIGN:UECapability:MEAS:BFINterrupt?
SENSe:LTE:SIGN:UECapability:MEAS:RCOReporting?
// *****************************************************************************
// Query inter-RAT UE capabilities.
// *****************************************************************************
SENSe:LTE:SIGN:UECapability:IRAT:UFDD:SUPPorted?
SENSe:LTE:SIGN:UECapability:IRAT:UFDD:EREDirection:UTRA?
SENSe:LTE:SIGN:UECapability:FAUeeutra:IRAT:EREDirection:UTRA?
SENSe:LTE:SIGN:UECapability:TAUeeutra:IRAT:EREDirection:UTRA?
SENSe:LTE:SIGN:UECapability:IRAT:UTDD128:SUPPorted?
SENSe:LTE:SIGN:UECapability:IRAT:UTDD128:EREDirection:UTDD?
SENSe:LTE:SIGN:UECapability:FAUeeutra:IRAT:EREDirection:UTDD?
SENSe:LTE:SIGN:UECapability:TAUeeutra:IRAT:EREDirection:UTDD?
SENSe:LTE:SIGN:UECapability:IRAT:GERan:SUPPorted?
SENSe:LTE:SIGN:UECapability:FAUeeutra:IRAT:GERan:SUPPorted?
SENSe:LTE:SIGN:UECapability:TAUeeutra:IRAT:GERan:SUPPorted?
SENSe:LTE:SIGN:UECapability:IRAT:GERan:PHGeran?
SENSe:LTE:SIGN:UECapability:FAUeeutra:IRAT:GERan:PHGeran?
SENSe:LTE:SIGN:UECapability:TAUeeutra:IRAT:GERan:PHGeran?
SENSe:LTE:SIGN:UECapability:IRAT:GERan:DTM?
SENSe:LTE:SIGN:UECapability:IRAT:GERan:EREDirection?
SENSe:LTE:SIGN:UECapability:IRAT:CDMA2000:NWSHaring?
SENSe:LTE:SIGN:UECapability:IRAT:CHRPd:SUPPorted?
SENSe:LTE:SIGN:UECapability:IRAT:CHRPd:TCONfig?
SENSe:LTE:SIGN:UECapability:IRAT:CHRPd:RCONfig?
SENSe:LTE:SIGN:UECapability:IRAT:CXRTt:SUPPorted?
SENSe:LTE:SIGN:UECapability:IRAT:CXRTt:TCONfig?
SENSe:LTE:SIGN:UECapability:IRAT:CXRTt:RCONfig?
SENSe:LTE:SIGN:UECapability:IRAT:CXRTt:ECSFb?
SENSe:LTE:SIGN:UECapability:FAUeeutra:IRAT:CXRTt:ECSFb?
SENSe:LTE:SIGN:UECapability:TAUeeutra:IRAT:CXRTt:ECSFb?
SENSe:LTE:SIGN:UECapability:IRAT:CXRTt:ECCMob?
SENSe:LTE:SIGN:UECapability:FAUeeutra:IRAT:CXRTt:ECCMob?
SENSe:LTE:SIGN:UECapability:TAUeeutra:IRAT:CXRTt:ECCMob?
SENSe:LTE:SIGN:UECapability:IRAT:CXRTt:ECDual?
SENSe:LTE:SIGN:UECapability:FAUeeutra:IRAT:CXRTt:ECDual?
SENSe:LTE:SIGN:UECapability:TAUeeutra:IRAT:CXRTt:ECDual?
// *****************************************************************************
// Query other UE capabilities.
// *****************************************************************************
SENSe:LTE:SIGN:UECapability:IDCindex?
SENSe:LTE:SIGN:UECapability:PPINdex?
SENSe:LTE:SIGN:UECapability:URTTimediff?
SENSe:LTE:SIGN:UECapability:DCIulca?
// *****************************************************************************
// Query MBMS UE capabilities.
// *****************************************************************************
SENSe:LTE:SIGN:UECapability:MBMS:SCELl?
SENSe:LTE:SIGN:UECapability:MBMS:NSCell?
// *****************************************************************************
// Query CSG proximity indication UE capabilities.
// *****************************************************************************
SENSe:LTE:SIGN:UECapability:CPINdication:FREQuency:INTRa?
SENSe:LTE:SIGN:UECapability:CPINdication:FREQuency:INTer?
SENSe:LTE:SIGN:UECapability:CPINdication:UTRan?
// *****************************************************************************
// Query neighbor cell SI-acquisition UE capabilities.
// *****************************************************************************
SENSe:LTE:SIGN:UECapability:NCSacq:FREQuency:INTRa?
SENSe:LTE:SIGN:UECapability:FAUeeutra:NCSacq:FREQuency:INTRa?
SENSe:LTE:SIGN:UECapability:TAUeeutra:NCSacq:FREQuency:INTRa?
SENSe:LTE:SIGN:UECapability:NCSacq:FREQuency:INTer?
SENSe:LTE:SIGN:UECapability:FAUeeutra:NCSacq:FREQuency:INTer?
SENSe:LTE:SIGN:UECapability:TAUeeutra:NCSacq:FREQuency:INTer?
SENSe:LTE:SIGN:UECapability:NCSacq:UTRan?
SENSe:LTE:SIGN:UECapability:FAUeeutra:NCSacq:UTRan?
SENSe:LTE:SIGN:UECapability:TAUeeutra:NCSacq:UTRan?
// *****************************************************************************
// Query UE-based network performance measurement capabilities.
// *****************************************************************************
SENSe:LTE:SIGN:UECapability:UBNPmeas:LMIDle?
SENSe:LTE:SIGN:UECapability:UBNPmeas:SGLocation?
SENSe:LTE:SIGN:UECapability:LMMeas?
// *****************************************************************************
// Query UE capabilities for RLC.
// *****************************************************************************
SENSe:LTE:SIGN:UECapability:ERLField?
// *****************************************************************************
// Query UE capabilities for WLAN interworking.
// *****************************************************************************
SENSe:LTE:SIGN:UECapability:WIW:WIRRules?
SENSe:LTE:SIGN:UECapability:WIW:WIAPolicies?
// *****************************************************************************
// Query UE capabilities for eMTC CE modes.
// *****************************************************************************
SENSe:LTE:SIGN:UECapability:CEParameters:MODE:A?
SENSe:LTE:SIGN:UECapability:CEParameters:MODE:B?
// *****************************************************************************
// Query UE capabilities for LAA.
// *****************************************************************************
SENSe:LTE:SIGN:UECapability:LAA:DL?
SENSe:LTE:SIGN:UECapability:LAA:EDPTs?
SENSe:LTE:SIGN:UECapability:LAA:SSSPosition?
SENSe:LTE:SIGN:UECapability:LAA:TM9?
// *****************************************************************************
// Query UE capabilities for dual connectivity.
// *****************************************************************************
SENSe:LTE:SIGN:UECapability:DCParameters:DTSPlit?
SENSe:LTE:SIGN:UECapability:DCParameters:DTSCg?
// *****************************************************************************
// Query UE capabilities for MAC layer.
// *****************************************************************************
SENSe:LTE:SIGN:UECapability:MAC:LCSPtimer?
SENSe:LTE:SIGN:UECapability:MAC:LDRXcommand?
// *****************************************************************************
// Query UE capabilities for sidelink communication.
// *****************************************************************************
SENSe:LTE:SIGN:UECapability:SL:CSTX?
SENSe:LTE:SIGN:UECapability:SL:DSRalloc?
SENSe:LTE:SIGN:UECapability:SL:DUSRalloc?
SENSe:LTE:SIGN:UECapability:SL:DSLSs?
SENSe:LTE:SIGN:UECapability:SL:DSPRoc?
Top