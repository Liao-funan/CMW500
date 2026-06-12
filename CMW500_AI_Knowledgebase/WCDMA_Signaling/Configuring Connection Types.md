# Configuring Connection Types

Module: WCDMA Signaling
Source: be0ad25ad3794e5a.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
Signaling Application
 > 
Configuring Connection Types
Configuring Connection Types
// *****************************************************************************
// Select test mode as UE terminated call type and specify SRB data rate.
// *****************************************************************************
CONFigure:WCDMa:SIGN:CONNection:UETerminate TEST
CONFigure:WCDMa:SIGN:CONNection:SRBData R1K7, R1K7
// *****************************************************************************
// Configure voice calls: select loopback connection, set 2 s for of delay,
// select narrowband AMR voice codec, mode D. Disable TFCI.
// Set the caller ID of the instrument.
// *****************************************************************************
CONFigure:WCDMa:SIGN:CONNection:VOICe:SOURce LOOP
CONFigure:WCDMa:SIGN:CONNection:VOICe:DELay:LOOPback 2
CONFigure:WCDMa:SIGN:CONNection:VOICe:CODec NB
CONFigure:WCDMa:SIGN:CONNection:VOICe:AMR:NARRow D
CONFigure:WCDMa:SIGN:CONNection:VOICe:TFCI OFF
CONFigure:WCDMa:SIGN:CONNection:CID 764332637249279
// *****************************************************************************
// Configure "SRB only" connections: select RRC target state CELL_FACH.
// *****************************************************************************
CONFigure:WCDMa:SIGN:CONNection:SRBSingle:TYPE CFACh
// *****************************************************************************
// Configure general test mode settings: Select test mode type, keep test
// loop during reconfiguration and data rate for BTFD tests.
// *****************************************************************************
CONFigure:WCDMa:SIGN:CONNection:TMODe:TYPE RHSPa
CONFigure:WCDMa:SIGN:CONNection:TMODe:KTLReconfig ON
CONFigure:WCDMa:SIGN:CONNection:TMODe:BTFD:TFORmat R10K2
// *****************************************************************************
// Configure RMC connections: domain, DL and UL data rate, loop test mode, 
// acknowledged mode for loop mode 1, uplink CRC for loop mode 2,
// percentage of used DL resources, data pattern.
// *****************************************************************************
CONFigure:WCDMa:SIGN:CONNection:TMODe:RMC:DOMain CS
CONFigure:WCDMa:SIGN:CONNection:TMODe:RMC:DRATe R64K, R12K2
CONFigure:WCDMa:SIGN:CONNection:TMODe:RMC:TMODe MODE1
CONFigure:WCDMa:SIGN:CONNection:TMODe:RMC:RLCMode ACKN
CONFigure:WCDMa:SIGN:CONNection:TMODe:RMC:UCRC ON
CONFigure:WCDMa:SIGN:CONNection:TMODe:RMC:DLRessources P0056
CONFigure:WCDMa:SIGN:CONNection:TMODe:RMC:DATA PRBS11
// *****************************************************************************
// Configure the HSPA test mode:
// test mode procedure, PRBS9 as data pattern, 10% CRC errors.
// *****************************************************************************
CONFigure:WCDMa:SIGN:CONNection:TMODe:HSPA:PROCedure CSPS
CONFigure:WCDMa:SIGN:CONNection:TMODe:HSPA:DIRection HSPA
CONFigure:WCDMa:SIGN:CONNection:TMODe:HSPA:DATA PRBS9
CONFigure:WCDMa:SIGN:CONNection:TMODe:HSPA:EINSertion 10
CONFigure:WCDMa:SIGN:CONNection:TMODe:HSPA:USDU 11744
// *****************************************************************************
// Configure packet data settings: data rate, receiving 
// window size, T1 release timer, network-controlled and 
// UE-controlled inactivity timers.
// *****************************************************************************
CONFigure:WCDMa:SIGN:CONNection:PACKet:DRATe HSDPa, HSUPa
CONFigure:WCDMa:SIGN:CONNection:PACKet:HSDPa:RWINdow MANual, 2560
CONFigure:WCDMa:SIGN:CONNection:PACKet:HSDPa:TIMer MANual, 0.1
CONFigure:WCDMa:SIGN:CONNection:PACKet:INACtivity:DCH:NETWork:ENABle ON
CONFigure:WCDMa:SIGN:CONNection:PACKet:INACtivity:DCH:NETWork:TIMer 10
CONFigure:WCDMa:SIGN:CONNection:PACKet:INACtivity:DCH:NETWork:DSTate FACH
CONFigure:WCDMa:SIGN:CONNection:PACKet:INACtivity:FACH:TIMer 2
CONFigure:WCDMa:SIGN:CONNection:PACKet:INACtivity:FACH:DSTate UPCH
CONFigure:WCDMa:SIGN:CONNection:PACKet:INACtivity:UPCH:TIMer 2
CONFigure:WCDMa:SIGN:CONNection:PACKet:INACtivity:CPCH:TIMer 2
CONFigure:WCDMa:SIGN:CONNection:PACKet:INACtivity:DCH:UEFDormancy:ENABle ON
CONFigure:WCDMa:SIGN:CONNection:PACKet:INACtivity:DCH:UEFDormancy:TIMer 8
CONFigure:WCDMa:SIGN:CONNection:PACKet:INACtivity:DCH:UEFDormancy:DSTate CPCH
Top