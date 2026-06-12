# Modifying Parameters for an Established Connection

Module: LTE Signaling
Source: 2928ab1f262548d0.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
General Configuration
 > 
Modifying Parameters for an Established Connection
Modifying Parameters for an Established Connection
// *****************************************************************************
// Modify inserted transport block errors and additional spectrum emission
// requirements. Set PCC scheduling type to 3GPP-compliant RMC.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:DLEinsertion 20
CONFigure:LTE:SIGN:CONNection:ASEMission NS03
CONFigure:LTE:SIGN:CONNection:PCC:STYPe RMC
// *****************************************************************************
// Redefine the PCC RMCs: DL RMC with 50 RBs, 64-QAM modulation and 
// transport block size index 5. UL RMC with 50 RBs, QPSK modulation and
// block size index 6.
// Position the resource blocks at the lower end of the cell bandwidth.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:PCC:RMC:DL N50,QPSK,T5
CONFigure:LTE:SIGN:CONNection:PCC:RMC:UL N50,QPSK,T6
CONFigure:LTE:SIGN:CONNection:PCC:RMC:RBPosition:DL LOW
CONFigure:LTE:SIGN:CONNection:PCC:RMC:RBPosition:UL LOW
// *****************************************************************************
// Modify the RS EPRE level for the PCC.
// *****************************************************************************
CONFigure:LTE:SIGN:DL:PCC:RSEPre:LEVel -83
// *****************************************************************************
// Command the UE to change the UL power of the PCC by +3 dB:
// Select single pattern as active TPC setup, define a single pattern of
// 3 steps UP, execute the pattern.
// *****************************************************************************
CONFigure:LTE:SIGN:UL:PCC:PUSCh:TPC:SET SINGle
CONFigure:LTE:SIGN:UL:PCC:PUSCh:TPC:SINGle 3, UP
CONFigure:LTE:SIGN:UL:PCC:PUSCh:TPC:PEXecute
// *****************************************************************************
// Apply a continuous TPC command pattern of 5x -1 dB and 4x +1 dB:
// Define the pattern and select the active TPC setup.
// *****************************************************************************
CONFigure:LTE:SIGN:UL:PCC:PUSCh:TPC:UDPattern 9,-1,-1,-1,-1,-1,1,1,1,1
CONFigure:LTE:SIGN:UL:PCC:PUSCh:TPC:SET UDContinuous
// *****************************************************************************
// Command the UE to a target power of -10 dBm.
// For the SCC, use a 3 dB higher power.
// *****************************************************************************
CONFigure:LTE:SIGN:UL:PCC:PUSCh:TPC:CLTPower -10
CONFigure:LTE:SIGN:UL:PCC:PUSCh:TPC:SET CLOop
CONFigure:LTE:SIGN:UL:SCC:PUSCh:TPC:CLTPower:OFFSet 3
// *****************************************************************************
// Execute ramping up pattern B for a 3GPP relative power control test.
// *****************************************************************************
CONFigure:LTE:SIGN:UL:PCC:PUSCh:TPC:SET RPControl
CONFigure:LTE:SIGN:UL:PCC:PUSCh:TPC:RPControl RUB
CONFigure:LTE:SIGN:UL:PCC:PUSCh:TPC:PEXecute
Top