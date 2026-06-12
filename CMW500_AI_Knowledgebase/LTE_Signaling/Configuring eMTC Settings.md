# Configuring eMTC Settings

Module: LTE Signaling
Source: f1cd36b01c6f4a6c.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring eMTC Settings
Configuring eMTC Settings
// *****************************************************************************
// Enable eMTC. Put MPDCCH in UE-specific search space.
// *****************************************************************************
CONFigure:LTE:SIGN:EMTC:ENABle ON
CONFigure:LTE:SIGN:EMTC:MPDCch:SSPace UESP
// *****************************************************************************
// Configure repetition settings.
// *****************************************************************************
CONFigure:LTE:SIGN:EMTC:MPDCch:MRPaging MR2
CONFigure:LTE:SIGN:EMTC:MPDCch:MREPetitions MR2
CONFigure:LTE:SIGN:EMTC:MPDCch:RLEVel RL2
CONFigure:LTE:SIGN:EMTC:PDSCh:A:MRCE MR16
CONFigure:LTE:SIGN:EMTC:PDSCh:A:CERepetition R4
CONFigure:LTE:SIGN:EMTC:PDSCh:B:MRCE MR192
CONFigure:LTE:SIGN:EMTC:PDSCh:B:CERepetition R4
CONFigure:LTE:SIGN:EMTC:PUSCh:A:MRCE MR16
CONFigure:LTE:SIGN:EMTC:PUSCh:A:CERepetition R4
CONFigure:LTE:SIGN:EMTC:PUSCh:B:MRCE MR192
CONFigure:LTE:SIGN:EMTC:PUSCh:B:CERepetition R4
CONFigure:LTE:SIGN:EMTC:PUCCh:A:CERepetition R2
CONFigure:LTE:SIGN:EMTC:PUCCh:B:CERepetition R8
// *****************************************************************************
// Configure coverage enhancement settings:
// Global settings, CE level 1 and 2, level 3 disabled.
// *****************************************************************************
CONFigure:LTE:SIGN:EMTC:CE:MODE A
CONFigure:LTE:SIGN:EMTC:CE:ILEVel LEV1
CONFigure:LTE:SIGN:EMTC:CE:LEVel:ENABle 3, OFF
CONFigure:LTE:SIGN:EMTC:CE:LEVel:QRXLevmin 1, -50
CONFigure:LTE:SIGN:EMTC:CE:LEVel:QRXLevmin 2, -70
CONFigure:LTE:SIGN:EMTC:CE:LEVel:PRACh:CINDex 1, 4
CONFigure:LTE:SIGN:EMTC:CE:LEVel:PRACh:CINDex 2, 6
CONFigure:LTE:SIGN:EMTC:CE:LEVel:PRACh:FOFFset 1, 2
CONFigure:LTE:SIGN:EMTC:CE:LEVel:PRACh:FOFFset 2, 2
CONFigure:LTE:SIGN:EMTC:CE:LEVel:PRACh:MPATtempts 1, A4
CONFigure:LTE:SIGN:EMTC:CE:LEVel:PRACh:MPATtempts 2, A8
CONFigure:LTE:SIGN:EMTC:CE:LEVel:PRACh:RPATtempt 1, R2
CONFigure:LTE:SIGN:EMTC:CE:LEVel:PRACh:RPATtempt 2, R4
CONFigure:LTE:SIGN:EMTC:CE:LEVel:PRACh:MMRRepetitio 1, R4
CONFigure:LTE:SIGN:EMTC:CE:LEVel:PRACh:MMRRepetitio 2, R8
// *****************************************************************************
// Configure narrowband hopping.
// *****************************************************************************
CONFigure:LTE:SIGN:EMTC:HOPPing:DL:ENABle ON
CONFigure:LTE:SIGN:EMTC:HOPPing:DL:HOFFset 2
CONFigure:LTE:SIGN:EMTC:HOPPing:DL:A:INTerval I2
CONFigure:LTE:SIGN:EMTC:HOPPing:DL:B:INTerval I4
CONFigure:LTE:SIGN:EMTC:HOPPing:UL:ENABle ON
CONFigure:LTE:SIGN:EMTC:HOPPing:UL:HOFFset 2
CONFigure:LTE:SIGN:EMTC:HOPPing:UL:A:INTerval I2
CONFigure:LTE:SIGN:EMTC:HOPPing:UL:B:INTerval I4
// *****************************************************************************
// Configure eMTC auto mode.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:STYPe EMAMode
CONFigure:LTE:SIGN:CONNection:EMAMode:A:DL:ALL N4, 1, 2, Q16, 11
CONFigure:LTE:SIGN:CONNection:EMAMode:A:UL:ALL N4, 1, 2, Q16, 11
// *****************************************************************************
// Configure eMTC compact scheduling.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:STYPe EMCS
CONFigure:LTE:SIGN:CONNection:CSCHeduling:A:DL:ALL 4, 0, Q16, 14
CONFigure:LTE:SIGN:CONNection:CSCHeduling:A:UL:ALL 6, 0, Q16, 14
// *****************************************************************************
// Configure eMTC user-defined channels.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:STYPe UDCH
CONFigure:LTE:SIGN:CONNection:UDCHannels:EMTC:A:DL 4, 0, QPSK, 5
CONFigure:LTE:SIGN:CONNection:UDCHannels:EMTC:NBPosition:DL GPP3
CONFigure:LTE:SIGN:CONNection:UDCHannels:EMTC:A:UL 6, 0, QPSK, 6
CONFigure:LTE:SIGN:CONNection:UDCHannels:EMTC:NBPosition:UL LOW
// *****************************************************************************
// Configure eMTC RMCs.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:STYPe RMC
CONFigure:LTE:SIGN:CONNection:RMC:EMTC:NBPosition:UL LOW
CONFigure:LTE:SIGN:CONNection:RMC:EMTC:NBPosition:DL GPP3
CONFigure:LTE:SIGN:CONNection:RMC:EMTC:SFPattern P1
CONFigure:LTE:SIGN:CONNection:PCC:RMC:DL N4,QPSK,KEEP
CONFigure:LTE:SIGN:CONNection:PCC:RMC:RBPosition:DL LOW
CONFigure:LTE:SIGN:CONNection:PCC:RMC:UL N6,QPSK,KEEP
CONFigure:LTE:SIGN:CONNection:PCC:RMC:RBPosition:UL LOW
Top