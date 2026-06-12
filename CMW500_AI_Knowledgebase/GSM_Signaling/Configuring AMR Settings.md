# Configuring AMR Settings

Module: GSM Signaling
Source: 1b9a77939d654fff.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring AMR Settings
Configuring AMR Settings
// *****************************************************************************
// Specify AMR signaling mode.
// *****************************************************************************
CONF:GSM:SIGN:CONN:CSW:AMR:SIGN:MODE RATS
// *****************************************************************************
// Configure rate sets and thresholds for different AMR types.
// *****************************************************************************
CONF:GSM:SIGN:CONN:CSW:AMR:RSET:NB:FRATe:GMSK C1220,C0795,C0590,C0475
CONF:GSM:SIGN:CONN:CSW:AMR:RSET:NB:HRATe:GMSK OFF,OFF,C0795,C0515
CONF:GSM:SIGN:CONN:CSW:AMR:RSET:NB:HRATe:EPSK OFF,C1220,C0795,C0590
CONF:GSM:SIGN:CONN:CSW:AMR:RSET:WB:FRATe:GMSK OFF,C0885,C0660
CONF:GSM:SIGN:CONN:CSW:AMR:RSET:WB:FRATe:EPSK OFF,C2385,C1585,C1265
CONF:GSM:SIGN:CONN:CSW:AMR:RSET:WB:HRATe:EPSK OFF,C1265,C0885
CONF:GSM:SIGN:CONN:CSW:AMR:THR:WB:HRATe:EPSK OFF,OFF,1.15,1.35,6.5,8.5
// *****************************************************************************
// Specify the initial codec modes.
// *****************************************************************************
CONFigure:GSM:SIGN:CONNection:CSWitched:AMR:CMODe:NB:FRATe:GMSK:DL 3
CONFigure:GSM:SIGN:CONNection:CSWitched:AMR:CMODe:NB:FRATe:GMSK:UL 3
CONFigure:GSM:SIGN:CONNection:CSWitched:AMR:CMODe:NB:HRATe:GMSK:DL 2
CONFigure:GSM:SIGN:CONNection:CSWitched:AMR:CMODe:NB:HRATe:GMSK:UL 2
CONFigure:GSM:SIGN:CONNection:CSWitched:AMR:CMODe:NB:HRATe:EPSK:DL 3
CONFigure:GSM:SIGN:CONNection:CSWitched:AMR:CMODe:NB:HRATe:EPSK:UL 3
CONFigure:GSM:SIGN:CONNection:CSWitched:AMR:CMODe:WB:FRATe:GMSK:DL 2
CONFigure:GSM:SIGN:CONNection:CSWitched:AMR:CMODe:WB:FRATe:GMSK:UL 2
CONFigure:GSM:SIGN:CONNection:CSWitched:AMR:CMODe:WB:FRATe:EPSK:DL 2
CONFigure:GSM:SIGN:CONNection:CSWitched:AMR:CMODe:WB:FRATe:EPSK:UL 2
CONFigure:GSM:SIGN:CONNection:CSWitched:AMR:CMODe:WB:HRATe:EPSK:DL 2
CONFigure:GSM:SIGN:CONNection:CSWitched:AMR:CMODe:WB:HRATe:EPSK:UL 2
// *****************************************************************************
// Query the DL codec modes requested by the MS (DL) and the actual codec modes 
// used by the MS (UL).
// *****************************************************************************
SENSe:GSM:SIGN:MSSinfo:AMR:CMODe:NB:FRATe:GMSK:DL?
SENSe:GSM:SIGN:MSSinfo:AMR:CMODe:NB:FRATe:GMSK:UL?
SENSe:GSM:SIGN:MSSinfo:AMR:CMODe:NB:HRATe:GMSK:DL?
SENSe:GSM:SIGN:MSSinfo:AMR:CMODe:NB:HRATe:GMSK:UL?
SENSe:GSM:SIGN:MSSinfo:AMR:CMODe:NB:HRATe:EPSK:DL?
SENSe:GSM:SIGN:MSSinfo:AMR:CMODe:NB:HRATe:EPSK:UL?
SENSe:GSM:SIGN:MSSinfo:AMR:CMODe:WB:FRATe:GMSK:DL?
SENSe:GSM:SIGN:MSSinfo:AMR:CMODe:WB:FRATe:GMSK:UL?
SENSe:GSM:SIGN:MSSinfo:AMR:CMODe:WB:FRATe:EPSK:DL?
SENSe:GSM:SIGN:MSSinfo:AMR:CMODe:WB:FRATe:EPSK:UL?
SENSe:GSM:SIGN:MSSinfo:AMR:CMODe:WB:HRATe:EPSK:DL?
SENSe:GSM:SIGN:MSSinfo:AMR:CMODe:WB:HRATe:EPSK:UL?
Top