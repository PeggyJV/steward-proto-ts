/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { AaveATokenAdaptorV1Calls, AaveATokenAdaptorV2Calls } from "./a_token";
import { AaveV2EnableAssetAsCollateralAdaptorV1Calls } from "./aave_v2_enable_asset_as_collateral_adaptor";
import { AaveV3ATokenAdaptorV1Calls } from "./aave_v3_a_token";
import { AaveV3DebtTokenAdaptorV1Calls } from "./aave_v3_debt_token";
import { AaveV3DebtTokenAdaptorV1FlashLoanCalls } from "./aave_v3_debt_token_flash_loan";
import { AuraERC4626AdaptorV1Calls } from "./aura_erc4626";
import { BalancerPoolAdaptorV1Calls } from "./balancer_pool";
import { BalancerPoolAdaptorV1FlashLoanCalls } from "./balancer_pool_flash_loan";
import { CompoundCTokenAdaptorV2Calls } from "./c_token";
import { CellarAdaptorV1Calls } from "./cellar_adaptor";
import { CollateralFTokenAdaptorV1Calls } from "./collateral_f_token";
import { ConvexCurveAdaptorV1Calls } from "./convex_curve";
import { CurveAdaptorV1Calls } from "./curve";
import { DebtFTokenAdaptorV1Calls } from "./debt_f_token";
import { AaveDebtTokenAdaptorV1Calls, AaveDebtTokenAdaptorV2Calls } from "./debt_token";
import { ERC4626AdaptorV1Calls } from "./erc4626";
import { FTokenAdaptorV1Calls } from "./f_token";
import { FeesAndReservesAdaptorV1Calls } from "./fees_and_reserves";
import { LegacyCellarAdaptorV1Calls } from "./legacy_cellar_adaptor";
import { MorphoAaveV2ATokenAdaptorV1Calls } from "./morpho_aave_v2_a_token";
import { MorphoAaveV2DebtTokenAdaptorV1Calls } from "./morpho_aave_v2_debt_token";
import { MorphoAaveV3ATokenCollateralAdaptorV1Calls } from "./morpho_aave_v3_a_token_collateral";
import { MorphoAaveV3ATokenP2PAdaptorV1Calls } from "./morpho_aave_v3_a_token_p2p";
import { MorphoAaveV3DebtTokenAdaptorV1Calls } from "./morpho_aave_v3_debt_token";
import { MorphoBlueCollateralAdaptorV1Calls } from "./morpho_blue_collateral";
import { MorphoBlueDebtAdaptorV1Calls } from "./morpho_blue_debt";
import { MorphoBlueSupplyAdaptorV1Calls } from "./morpho_blue_supply";
import { OneInchAdaptorV1Calls } from "./oneinch";
import { StakingAdaptorV1Calls } from "./staking";
import { SwapWithUniswapAdaptorV1Calls } from "./swap_with_uniswap";
import { UniswapV3AdaptorV2Calls } from "./uniswap_v3";
import { VestingSimpleAdaptorV2Calls } from "./vesting_simple";
import { ZeroXAdaptorV1Calls } from "./zero_x";

export const protobufPackage = "steward.v4";

/** Represents a function call to a cellar that implements Cellar.sol */
export interface CellarV2 {
  /** Represents function `callOnAdaptor(AdaptorCall[] memory data)` */
  callOnAdaptor?:
    | CellarV2_CallOnAdaptor
    | undefined;
  /** Represents function `removePosition(uint256 index)` */
  removePosition?:
    | CellarV2_RemovePosition
    | undefined;
  /** Represents function `setHoldingPosition(uint32 position_id)` */
  setHoldingPosition?:
    | CellarV2_SetHoldingPosition
    | undefined;
  /** Represents function `setStrategistPayoutAddress(address payout)` */
  setStrategistPayoutAddress?:
    | CellarV2_SetStrategistPayoutAddress
    | undefined;
  /** Represents function `swapPositions(uint256 index1, uint256 index2)` */
  swapPositions?:
    | CellarV2_SwapPositions
    | undefined;
  /** Represents function `setShareLockPeriod(uint256 newLock)` */
  setShareLockPeriod?:
    | CellarV2_SetShareLockPeriod
    | undefined;
  /** Represents function `addPosition(uint256 index, address position)` */
  addPosition?:
    | CellarV2_AddPosition
    | undefined;
  /** Represents function `setupAdaptor(address adaptor)` */
  setupAdaptor?:
    | CellarV2_SetupAdaptor
    | undefined;
  /** Represents function `initiateShutdown()` */
  initiateShutdown?:
    | CellarV2_InitiateShutdown
    | undefined;
  /** Represents function `liftShutdown()` */
  liftShutdown?:
    | CellarV2_LiftShutdown
    | undefined;
  /** Represents function `setPlatformFee(uint256)` */
  setPlatformFee?:
    | CellarV2_SetPlatformFee
    | undefined;
  /** Represents function `setStrategistPlatformCut(address)` */
  setStrategistPlatformCut?:
    | CellarV2_SetStrategistPlatformCut
    | undefined;
  /** Represents function `setRebalanceDeviation(uint256)` */
  setRebalanceDeviation?: CellarV2_SetRebalanceDeviation | undefined;
}

/**
 * Allows strategists to manage their Cellar using arbitrary logic calls to adaptors.
 *
 * Represents function `callOnAdaptor(AdaptorCall[] memory data)`
 */
export interface CellarV2_CallOnAdaptor {
  data: AdaptorCall[];
}

/**
 * Remove the position at a given index from the list of positions used by the cellar.
 *
 * Represents function `removePosition(uint32 index, bool inDebtArray)`
 */
export interface CellarV2_RemovePosition {
  /** Index at which to remove the position */
  index: number;
  /** Whether to remove position from the debt array, or the credit array. */
  inDebtArray: boolean;
}

/**
 * Set the holding position used of the cellar.
 *
 * Represents function `setHoldingIndex(uint8 index)`
 */
export interface CellarV2_SetHoldingPosition {
  /** ID (index) of the new holding position to use */
  positionId: number;
}

/**
 * Sets the Strategists payout address.
 *
 * Represents function `setStrategistPayoutAddress(address payout)`
 */
export interface CellarV2_SetStrategistPayoutAddress {
  payout: string;
}

/**
 * Swap the positions at two given indeces.
 *
 * Represents function `swapPositions(uint32 index1, uint32 index2)`
 */
export interface CellarV2_SwapPositions {
  /** Index of the first position */
  index1: number;
  /** Index of the second position */
  index2: number;
  /** Whether to switch positions in the debt array, or the credit array. */
  inDebtArray: boolean;
}

/**
 * Allows share lock period to be updated.
 *
 * Represents function `setShareLockPeriod()`
 */
export interface CellarV2_SetShareLockPeriod {
  newLock: string;
}

/**
 * Insert a trusted position to the list of positions used by the cellar at a given index.
 *
 * Represents function `addPosition(uint32 index, uint32 positionId, bytes configurationData, bool inDebtArray)`
 */
export interface CellarV2_AddPosition {
  /** Index at which to add the position */
  index: number;
  /** The position's ID in the cellar registry */
  positionId: number;
  /** Data used to configure how the position behaves */
  configurationData: Uint8Array;
  /** Whether to add position in the debt array, or the credit array. */
  inDebtArray: boolean;
}

/** Represents function `initiateShutdown()` */
export interface CellarV2_InitiateShutdown {
}

/** Represents function `liftShutdown()` */
export interface CellarV2_LiftShutdown {
}

/** Represents function `setPlatformFee(uint64)` */
export interface CellarV2_SetPlatformFee {
  /** New platform fee */
  amount: number;
}

/** Represents function `setStrategistPlatformCut(uint64)` */
export interface CellarV2_SetStrategistPlatformCut {
  /** New strategist platform cut */
  amount: number;
}

/**
 * Allows owner to add new adaptors for the cellar to use.
 *
 * Represents function `setupAdaptor(address adaptor)`
 */
export interface CellarV2_SetupAdaptor {
  /** Address of the adaptor */
  adaptor: string;
}

/**
 * Changes the cellar's allowed rebalance deviation, which is the percent the total assets of a cellar may deviate
 * during a `callOnAdaptor`(rebalance) call. The maximum allowed deviation is 100000000000000000 (0.1e18), or 10%.
 *
 * Represents function `setRebalanceDeviation(uint256)`
 */
export interface CellarV2_SetRebalanceDeviation {
  newDeviation: string;
}

/** Represent a function call initiated through a governance proposal */
export interface CellarV2Governance {
  /** Represents function `initiateShutdown()` */
  initiateShutdown?:
    | CellarV2Governance_InitiateShutdown
    | undefined;
  /** Represents function `liftShutdown()` */
  liftShutdown?:
    | CellarV2Governance_LiftShutdown
    | undefined;
  /** Represents function `setPlatformFee(uint256)` */
  setPlatformFee?:
    | CellarV2Governance_SetPlatformFee
    | undefined;
  /** Represents function `setStrategistPlatformCut(address)` */
  setStrategistPlatformCut?:
    | CellarV2Governance_SetStrategistPlatformCut
    | undefined;
  /** Represents function `setupAdaptor(address adaptor)` */
  setupAdaptor?:
    | CellarV2Governance_SetupAdaptor
    | undefined;
  /** Represents function `setRebalanceDeviation(uint256)` */
  setRebalanceDeviation?: CellarV2Governance_SetRebalanceDeviation | undefined;
}

/** Represents function `initiateShutdown()` */
export interface CellarV2Governance_InitiateShutdown {
}

/** Represents function `liftShutdown()` */
export interface CellarV2Governance_LiftShutdown {
}

/** Represents function `setPlatformFee(uint64)` */
export interface CellarV2Governance_SetPlatformFee {
  /** New platform fee */
  amount: number;
}

/** Represents function `setStrategistPlatformCut(uint64)` */
export interface CellarV2Governance_SetStrategistPlatformCut {
  /** New strategist platform cut */
  amount: number;
}

/**
 * Allows owner to add new adaptors for the cellar to use.
 *
 * Represents function `setupAdaptor(address adaptor)`
 */
export interface CellarV2Governance_SetupAdaptor {
  /** Address of the adaptor */
  adaptor: string;
}

/**
 * Changes the cellar's allowed rebalance deviation, which is the percent the total assets of a cellar may deviate
 * during a `callOnAdaptor`(rebalance) call. The maximum allowed deviation is 100000000000000000 (0.1e18), or 10%.
 *
 * Represents function `setRebalanceDeviation(uint256)`
 */
export interface CellarV2Governance_SetRebalanceDeviation {
  newDeviation: string;
}

export interface CellarV22 {
  /** Represents a single function call */
  functionCall?:
    | CellarV22_FunctionCall
    | undefined;
  /** Represents multiple, ordered function calls */
  multicall?: CellarV22_Multicall | undefined;
}

/** The function you wish to execute on the target cellar */
export interface CellarV22_FunctionCall {
  /** Represents function `addPosition(uint256 index, address position)` */
  addPosition?:
    | CellarV22_AddPosition
    | undefined;
  /** Represents function `callOnAdaptor(AdaptorCall[] memory data)` */
  callOnAdaptor?:
    | CellarV22_CallOnAdaptor
    | undefined;
  /** Represents function `removePosition(uint256 index, bool inDebtArray)` */
  removePosition?:
    | CellarV22_RemovePosition
    | undefined;
  /** Represents function `removeAdaptorFromCatalogue(address adaptor)` */
  removeAdaptorFromCatalogue?:
    | CellarV22_RemoveAdaptorFromCatalogue
    | undefined;
  /** Represents function `removePositionFromCatalogue(uint32 positionId)` */
  removePositionFromCatalogue?:
    | CellarV22_RemovePositionFromCatalogue
    | undefined;
  /** Represents function `setHoldingPosition(uint32 position_id)` */
  setHoldingPosition?:
    | CellarV22_SetHoldingPosition
    | undefined;
  /** Represents function `setStrategistPayoutAddress(address payout)` */
  setStrategistPayoutAddress?:
    | CellarV22_SetStrategistPayoutAddress
    | undefined;
  /** Represents function `swapPositions(uint256 index1, uint256 index2)` */
  swapPositions?:
    | CellarV22_SwapPositions
    | undefined;
  /** Represents function `addAdaptorToCatalogue(address adaptor)` */
  addAdaptorToCatalogue?:
    | CellarV22_AddAdaptorToCatalogue
    | undefined;
  /** Represents function `addPositionToCatalogue(uint32 positionId)` */
  addPositionToCatalogue?:
    | CellarV22_AddPositionToCatalogue
    | undefined;
  /** Represents function `setRebalanceDeviation(uint256)` */
  setRebalanceDeviation?:
    | CellarV22_SetRebalanceDeviation
    | undefined;
  /** Represents function `setShareLockPeriod(uint256 newLock)` */
  setShareLockPeriod?:
    | CellarV22_SetShareLockPeriod
    | undefined;
  /** Represents function `setStrategistPlatformCut(uint64 cut)` */
  setStrategistPlatformCut?:
    | CellarV22_SetStrategistPlatformCut
    | undefined;
  /** Represents function `initiateShutdown()` */
  initiateShutdown?:
    | CellarV22_InitiateShutdown
    | undefined;
  /** Represents function `liftShutdown()` */
  liftShutdown?:
    | CellarV22_LiftShutdown
    | undefined;
  /** Represents function `cachePriceRouter(bool checkTotalAssets, uint16 allowableRange, address expectedPriceRouter)` */
  cachePriceRouter?: CellarV22_CachePriceRouter | undefined;
}

/**
 * Insert a trusted position to the list of positions used by the cellar at a given index.
 *
 * Represents function `addPosition(uint32 index, uint32 positionId, bytes configurationData, bool inDebtArray)`
 */
export interface CellarV22_AddPosition {
  /** Index at which to add the position */
  index: number;
  /** The position's ID in the cellar registry */
  positionId: number;
  /** Data used to configure how the position behaves */
  configurationData: Uint8Array;
  /** Whether to add position in the debt array, or the credit array. */
  inDebtArray: boolean;
}

/**
 * Allows strategists to manage their Cellar using arbitrary logic calls to adaptors.
 *
 * Represents function `callOnAdaptor(AdaptorCall[] memory data)`
 */
export interface CellarV22_CallOnAdaptor {
  data: AdaptorCall[];
}

/**
 * Remove the position at a given index from the list of positions used by the cellar.
 *
 * Represents function `removePosition(uint32 index, bool inDebtArray)`
 */
export interface CellarV22_RemovePosition {
  /** Index at which to remove the position */
  index: number;
  /** Whether to remove position from the debt array, or the credit array. */
  inDebtArray: boolean;
}

/**
 * Allows callers to remove adaptors from this cellar's catalogue
 *
 * Represents function `removeAdaptorFromCatalogue(address adaptor)`
 */
export interface CellarV22_RemoveAdaptorFromCatalogue {
  adaptor: string;
}

/**
 * Allows caller to remove positions from this cellar's catalogue
 *
 * Represents function `removePositionFromCatalogue(uint32 positionId)`
 */
export interface CellarV22_RemovePositionFromCatalogue {
  positionId: number;
}

/**
 * Set the holding position used of the cellar.
 *
 * Represents function `setHoldingIndex(uint8 index)`
 */
export interface CellarV22_SetHoldingPosition {
  /** ID (index) of the new holding position to use */
  positionId: number;
}

/**
 * Sets the Strategists payout address.
 *
 * Represents function `setStrategistPayoutAddress(address payout)`
 */
export interface CellarV22_SetStrategistPayoutAddress {
  payout: string;
}

/**
 * Swap the positions at two given indeces.
 *
 * Represents function `swapPositions(uint32 index1, uint32 index2)`
 */
export interface CellarV22_SwapPositions {
  /** Index of the first position */
  index1: number;
  /** Index of the second position */
  index2: number;
  /** Whether to switch positions in the debt array, or the credit array. */
  inDebtArray: boolean;
}

/**
 * Allows caller to call multiple functions in a single TX.
 *
 * Represents function `multicall(bytes[] data)`
 */
export interface CellarV22_Multicall {
  functionCalls: CellarV22_FunctionCall[];
}

/**
 * Allows the owner to add an adaptor to the Cellar's adaptor catalogue
 *
 * Represents function `addAdaptorToCatalogue(address adaptor)`
 */
export interface CellarV22_AddAdaptorToCatalogue {
  adaptor: string;
}

/**
 * Allows the owner to add a position to the Cellar's position catalogue
 *
 * Represents function `addPositionToCatalogue(uint32 positionId)`
 */
export interface CellarV22_AddPositionToCatalogue {
  positionId: number;
}

/**
 * Allows share lock period to be updated.
 *
 * Represents function `setShareLockPeriod()`
 */
export interface CellarV22_SetShareLockPeriod {
  newLock: string;
}

/**
 * Changes the cellar's allowed rebalance deviation, which is the percent the total assets of a cellar may deviate
 * during a `callOnAdaptor`(rebalance) call. The maximum allowed deviation is 100000000000000000 (0.1e18), or 10%.
 *
 * Represents function `setRebalanceDeviation(uint256)`
 */
export interface CellarV22_SetRebalanceDeviation {
  newDeviation: string;
}

/**
 * Shutdown the cellar. Used in an emergency or if the cellar has been deprecated.
 *
 * Represents function `initiateShutdown()`
 */
export interface CellarV22_InitiateShutdown {
}

/**
 * Allows strategist to set the platform cut for the cellar.
 *
 * Represents function `setStrategistPlatformCut(uint64 cut)`
 */
export interface CellarV22_SetStrategistPlatformCut {
  /** The new strategist platform cut */
  newCut: number;
}

/**
 * Allows the owner to restart a shut down Cellar
 *
 * Represents function `liftShutdown()`
 */
export interface CellarV22_LiftShutdown {
}

/**
 * Updates the cellar to use the latest price router in the registry.
 *
 * Represents function `cachePriceRouter(bool checkTotalAssets, uint16 allowableRange, address expectedPriceRouter)`
 */
export interface CellarV22_CachePriceRouter {
  /** Whether to check the total assets of the cellar */
  checkTotalAssets: boolean;
  /** The allowable range of the cellar's total assets to deviate between old and new routers */
  allowableRange: number;
  /** The expected price router address */
  expectedPriceRouter: string;
}

/** Represent a function call initiated through a governance proposal */
export interface CellarV22Governance {
  /** Represents a single function call */
  functionCall?:
    | CellarV22Governance_FunctionCall
    | undefined;
  /** Represents multiple, ordered function calls */
  multicall?: CellarV22Governance_Multicall | undefined;
}

/** The function you wish to execute on the target cellar */
export interface CellarV22Governance_FunctionCall {
  /** Represents function `addAdaptorToCatalogue(address adaptor)` */
  addAdaptorToCatalogue?:
    | CellarV22Governance_AddAdaptorToCatalogue
    | undefined;
  /** Represents function `addPositionToCatalogue(uint32 positionId)` */
  addPositionToCatalogue?:
    | CellarV22Governance_AddPositionToCatalogue
    | undefined;
  /** Represents function `setRebalanceDeviation(uint256)` */
  setRebalanceDeviation?:
    | CellarV22Governance_SetRebalanceDeviation
    | undefined;
  /** Represents function `setShareLockPeriod(uint256 newLock)` */
  setShareLockPeriod?:
    | CellarV22Governance_SetShareLockPeriod
    | undefined;
  /** Represents function `setStrategistPlatformCut(uint64 cut)` */
  setStrategistPlatformCut?:
    | CellarV22Governance_SetStrategistPlatformCut
    | undefined;
  /** Represents function `initiateShutdown()` */
  initiateShutdown?:
    | CellarV22Governance_InitiateShutdown
    | undefined;
  /** Represents function `liftShutdown()` */
  liftShutdown?:
    | CellarV22Governance_LiftShutdown
    | undefined;
  /** Represents function `forcePositionOut(uint32 index, uint32 positionId, bool inDebtArray)` */
  forcePositionOut?:
    | CellarV22Governance_ForcePositionOut
    | undefined;
  /** Represents function `toggleIgnorePause(bool ignore)` */
  toggleIgnorePause?:
    | CellarV22Governance_ToggleIgnorePause
    | undefined;
  /** Represents function `cachePriceRouter(bool checkTotalAssets, uint16 allowableRange, address expectedPriceRouter)` */
  cachePriceRouter?:
    | CellarV22Governance_CachePriceRouter
    | undefined;
  /** Represents function `addPosition(uint256 index, address position)` */
  addPosition?:
    | CellarV22Governance_AddPosition
    | undefined;
  /** Represents function `callOnAdaptor(AdaptorCall[] memory data)` */
  callOnAdaptor?:
    | CellarV22Governance_CallOnAdaptor
    | undefined;
  /** Represents function `removePosition(uint256 index, bool inDebtArray)` */
  removePosition?:
    | CellarV22Governance_RemovePosition
    | undefined;
  /** Represents function `removeAdaptorFromCatalogue(address adaptor)` */
  removeAdaptorFromCatalogue?:
    | CellarV22Governance_RemoveAdaptorFromCatalogue
    | undefined;
  /** Represents function `removePositionFromCatalogue(uint32 positionId)` */
  removePositionFromCatalogue?:
    | CellarV22Governance_RemovePositionFromCatalogue
    | undefined;
  /** Represents function `setHoldingPosition(uint32 position_id)` */
  setHoldingPosition?:
    | CellarV22Governance_SetHoldingPosition
    | undefined;
  /** Represents function `swapPositions(uint256 index1, uint256 index2)` */
  swapPositions?: CellarV22Governance_SwapPositions | undefined;
}

/**
 * Allows caller to call multiple functions in a single TX.
 *
 * Represents function `multicall(bytes[] data)`
 */
export interface CellarV22Governance_Multicall {
  functionCalls: CellarV22Governance_FunctionCall[];
}

/**
 * Allows the owner to add an adaptor to the Cellar's adaptor catalogue
 *
 * Represents function `addAdaptorToCatalogue(address adaptor)`
 */
export interface CellarV22Governance_AddAdaptorToCatalogue {
  adaptor: string;
}

/**
 * Allows the owner to add a position to the Cellar's position catalogue
 *
 * Represents function `addPositionToCatalogue(uint32 positionId)`
 */
export interface CellarV22Governance_AddPositionToCatalogue {
  positionId: number;
}

/**
 * Allows share lock period to be updated.
 *
 * Represents function `setShareLockPeriod()`
 */
export interface CellarV22Governance_SetShareLockPeriod {
  newLock: string;
}

/**
 * Changes the cellar's allowed rebalance deviation, which is the percent the total assets of a cellar may deviate
 * during a `callOnAdaptor`(rebalance) call. The maximum allowed deviation is 100000000000000000 (0.1e18), or 10%.
 *
 * Represents function `setRebalanceDeviation(uint256)`
 */
export interface CellarV22Governance_SetRebalanceDeviation {
  newDeviation: string;
}

/**
 * Shutdown the cellar. Used in an emergency or if the cellar has been deprecated.
 *
 * Represents function `initiateShutdown()`
 */
export interface CellarV22Governance_InitiateShutdown {
}

/**
 * Allows strategist to set the platform cut for the cellar.
 *
 * Represents function `setStrategistPlatformCut(uint64 cut)`
 */
export interface CellarV22Governance_SetStrategistPlatformCut {
  /** The new strategist platform cut */
  newCut: number;
}

/**
 * Allows the owner to restart a shut down Cellar
 *
 * Represents function `liftShutdown()`
 */
export interface CellarV22Governance_LiftShutdown {
}

/**
 * Allows caller to force a position out of the cellar
 *
 * Represents function `forcePositionOut(uint32 index, uint32 positionId, bool inDebtArray)`
 */
export interface CellarV22Governance_ForcePositionOut {
  index: number;
  positionId: number;
  inDebtArray: boolean;
}

/**
 * Allows caller to toggle the ignorePause flag on the cellar
 *
 * Represents function `toggleIgnorePause(bool ignore)`
 */
export interface CellarV22Governance_ToggleIgnorePause {
  ignore: boolean;
}

/**
 * Updates the cellar to use the latest price router in the registry.
 *
 * Represents function `cachePriceRouter(bool checkTotalAssets, uint16 allowableRange, address expectedPriceRouter)`
 */
export interface CellarV22Governance_CachePriceRouter {
  /** Whether to check the total assets of the cellar */
  checkTotalAssets: boolean;
  /** The allowable range of the cellar's total assets to deviate between old and new routers */
  allowableRange: number;
  /** The expected price router address */
  expectedPriceRouter: string;
}

/**
 * Insert a trusted position to the list of positions used by the cellar at a given index.
 *
 * Represents function `addPosition(uint32 index, uint32 positionId, bytes configurationData, bool inDebtArray)`
 */
export interface CellarV22Governance_AddPosition {
  /** Index at which to add the position */
  index: number;
  /** The position's ID in the cellar registry */
  positionId: number;
  /** Data used to configure how the position behaves */
  configurationData: Uint8Array;
  /** Whether to add position in the debt array, or the credit array. */
  inDebtArray: boolean;
}

/**
 * Allows strategists to manage their Cellar using arbitrary logic calls to adaptors.
 *
 * Represents function `callOnAdaptor(AdaptorCall[] memory data)`
 */
export interface CellarV22Governance_CallOnAdaptor {
  data: AdaptorCall[];
}

/**
 * Remove the position at a given index from the list of positions used by the cellar.
 *
 * Represents function `removePosition(uint32 index, bool inDebtArray)`
 */
export interface CellarV22Governance_RemovePosition {
  /** Index at which to remove the position */
  index: number;
  /** Whether to remove position from the debt array, or the credit array. */
  inDebtArray: boolean;
}

/**
 * Allows callers to remove adaptors from this cellar's catalogue
 *
 * Represents function `removeAdaptorFromCatalogue(address adaptor)`
 */
export interface CellarV22Governance_RemoveAdaptorFromCatalogue {
  adaptor: string;
}

/**
 * Allows caller to remove positions from this cellar's catalogue
 *
 * Represents function `removePositionFromCatalogue(uint32 positionId)`
 */
export interface CellarV22Governance_RemovePositionFromCatalogue {
  positionId: number;
}

/**
 * Set the holding position used of the cellar.
 *
 * Represents function `setHoldingIndex(uint8 index)`
 */
export interface CellarV22Governance_SetHoldingPosition {
  /** ID (index) of the new holding position to use */
  positionId: number;
}

/**
 * Swap the positions at two given indeces.
 *
 * Represents function `swapPositions(uint32 index1, uint32 index2)`
 */
export interface CellarV22Governance_SwapPositions {
  /** Index of the first position */
  index1: number;
  /** Index of the second position */
  index2: number;
  /** Whether to switch positions in the debt array, or the credit array. */
  inDebtArray: boolean;
}

export interface CellarV25 {
  /** Represents a single function call */
  functionCall?:
    | CellarV25_FunctionCall
    | undefined;
  /** Represents multiple, ordered function calls */
  multicall?: CellarV25_Multicall | undefined;
}

/** The function you wish to execute on the target cellar */
export interface CellarV25_FunctionCall {
  /** Represents function `addPosition(uint256 index, address position)` */
  addPosition?:
    | CellarV25_AddPosition
    | undefined;
  /** Represents function `callOnAdaptor(AdaptorCall[] memory data)` */
  callOnAdaptor?:
    | CellarV25_CallOnAdaptor
    | undefined;
  /** Represents function `removePosition(uint256 index)` */
  removePosition?:
    | CellarV25_RemovePosition
    | undefined;
  /** Represents function `setHoldingPosition(uint32 position_id)` */
  setHoldingPosition?:
    | CellarV25_SetHoldingPosition
    | undefined;
  /** Represents function `setStrategistPayoutAddress(address payout)` */
  setStrategistPayoutAddress?:
    | CellarV25_SetStrategistPayoutAddress
    | undefined;
  /** Represents function `swapPositions(uint256 index1, uint256 index2)` */
  swapPositions?:
    | CellarV25_SwapPositions
    | undefined;
  /** Represents function `setShareLockPeriod(uint256 newLock)` */
  setShareLockPeriod?:
    | CellarV25_SetShareLockPeriod
    | undefined;
  /** Represents function `initiateShutdown()` */
  initiateShutdown?:
    | CellarV25_InitiateShutdown
    | undefined;
  /** Represents function `liftShutdown()` */
  liftShutdown?:
    | CellarV25_LiftShutdown
    | undefined;
  /** Represents function `removeAdaptorFromCatalogue(address adaptor)` */
  removeAdaptorFromCatalogue?:
    | CellarV25_RemoveAdaptorFromCatalogue
    | undefined;
  /** Represents function `removePositionFromCatalogue(uint32 positionId)` */
  removePositionFromCatalogue?:
    | CellarV25_RemovePositionFromCatalogue
    | undefined;
  /** Represents function `decreaseShareSupplyCap(uint192) */
  decreaseShareSupplyCap?:
    | CellarV25_DecreaseShareSupplyCap
    | undefined;
  /** Represents function `setAlternativeAssetData(ERC20 _alternativeAsset, uint32 _alternativeHoldingPosition, uint32 _alternativeAssetFee)` */
  setAlternativeAssetData?:
    | CellarV25_SetAlternativeAssetData
    | undefined;
  /** Represents function `setDropAlternativeAssetData(ERC20 _alternativeAsset)` */
  dropAlternativeAssetData?:
    | CellarV25_DropAlternativeAssetData
    | undefined;
  /** Represents function `addAdaptorToCatalogue(address adaptor)` */
  addAdaptorToCatalogue?:
    | CellarV25_AddAdaptorToCatalogue
    | undefined;
  /** Represents function `addPositionToCatalogue(uint32 positionId)` */
  addPositionToCatalogue?:
    | CellarV25_AddPositionToCatalogue
    | undefined;
  /** Represents function `setRebalanceDeviation(uint256)` */
  setRebalanceDeviation?:
    | CellarV25_SetRebalanceDeviation
    | undefined;
  /** Represents function `setStrategistPlatformCut(uint64 cut)` */
  setStrategistPlatformCut?:
    | CellarV25_SetStrategistPlatformCut
    | undefined;
  /** Represents function `setSharePriceOracle(uint256 _registryId, ERC4626SharePriceOracle _sharePriceOracle)` */
  setSharePriceOracle?:
    | CellarV25_SetSharePriceOracle
    | undefined;
  /** Represents function `increaseShareSupplyCap(uint192 _newShareSupplyCap)` */
  increaseShareSupplyCap?:
    | CellarV25_IncreaseShareSupplyCap
    | undefined;
  /** Represents function `cachePriceRouter(bool checkTotalAssets, uint16 allowableRange, address expectedPriceRouter)` */
  cachePriceRouter?: CellarV25_CachePriceRouter | undefined;
}

/**
 * Insert a trusted position to the list of positions used by the cellar at a given index.
 *
 * Represents function `addPosition(uint32 index, uint32 positionId, bytes configurationData, bool inDebtArray)`
 */
export interface CellarV25_AddPosition {
  /** Index at which to add the position */
  index: number;
  /** The position's ID in the cellar registry */
  positionId: number;
  /** Data used to configure how the position behaves */
  configurationData: Uint8Array;
  /** Whether to add position in the debt array, or the credit array. */
  inDebtArray: boolean;
}

/**
 * Allows strategists to manage their Cellar using arbitrary logic calls to adaptors.
 *
 * Represents function `callOnAdaptor(AdaptorCall[] memory data)`
 */
export interface CellarV25_CallOnAdaptor {
  data: AdaptorCall[];
}

/**
 * Remove the position at a given index from the list of positions used by the cellar.
 *
 * Represents function `removePosition(uint32 index, bool inDebtArray)`
 */
export interface CellarV25_RemovePosition {
  /** Index at which to remove the position */
  index: number;
  /** Whether to remove position from the debt array, or the credit array. */
  inDebtArray: boolean;
}

/**
 * Set the holding position used of the cellar.
 *
 * Represents function `setHoldingIndex(uint8 index)`
 */
export interface CellarV25_SetHoldingPosition {
  /** ID (index) of the new holding position to use */
  positionId: number;
}

/**
 * Sets the Strategists payout address.
 *
 * Represents function `setStrategistPayoutAddress(address payout)`
 */
export interface CellarV25_SetStrategistPayoutAddress {
  payout: string;
}

/**
 * Swap the positions at two given indeces.
 *
 * Represents function `swapPositions(uint32 index1, uint32 index2)`
 */
export interface CellarV25_SwapPositions {
  /** Index of the first position */
  index1: number;
  /** Index of the second position */
  index2: number;
  /** Whether to switch positions in the debt array, or the credit array. */
  inDebtArray: boolean;
}

/**
 * Allows share lock period to be updated.
 *
 * Represents function `setShareLockPeriod()`
 */
export interface CellarV25_SetShareLockPeriod {
  newLock: string;
}

/**
 * Shutdown the cellar. Used in an emergency or if the cellar has been deprecated.
 *
 * Represents function `initiateShutdown()`
 */
export interface CellarV25_InitiateShutdown {
}

/**
 * Allows the owner to restart a shut down Cellar
 *
 * Represents function `liftShutdown()`
 */
export interface CellarV25_LiftShutdown {
}

/**
 * Allows caller to call multiple functions in a single TX.
 *
 * Represents function `multicall(bytes[] data)`
 */
export interface CellarV25_Multicall {
  functionCalls: CellarV25_FunctionCall[];
}

/**
 * Allows callers to remove adaptors from this cellar's catalogue
 *
 * Represents function `removeAdaptorFromCatalogue(address adaptor)`
 */
export interface CellarV25_RemoveAdaptorFromCatalogue {
  adaptor: string;
}

/**
 * Allows caller to remove positions from this cellar's catalogue
 *
 * Represents function `removePositionFromCatalogue(uint32 positionId)`
 */
export interface CellarV25_RemovePositionFromCatalogue {
  positionId: number;
}

/**
 * Allows strategist to decrease the share supply cap
 *
 * Represents function `decreaseShareSupplyCap(uint192)`
 */
export interface CellarV25_DecreaseShareSupplyCap {
  newCap: string;
}

/**
 * Allows the strategist to add, or update an existing alternative asset deposit.
 *
 * Represents function `setAlternativeAssetData(ERC20 _alternativeAsset, uint32 _alternativeHoldingPosition, uint32 _alternativeAssetFee)`
 */
export interface CellarV25_SetAlternativeAssetData {
  /** The address of the alternative asset */
  alternativeAsset: string;
  /** The holding position to direct alternative asset deposits to */
  alternativeHoldingPosition: number;
  /** The fee to charge for depositing this alternative asset */
  alternativeAssetFee: number;
}

/**
 * Allows the strategist to stop an alternative asset from being deposited.
 *
 * Represents function `dropAlternativeAssetData(ERC20 _alternativeAsset)`
 */
export interface CellarV25_DropAlternativeAssetData {
  /** The address of the alternative asset */
  alternativeAsset: string;
}

/**
 * Allows the owner to add an adaptor to the Cellar's adaptor catalogue
 *
 * Represents function `addAdaptorToCatalogue(address adaptor)`
 */
export interface CellarV25_AddAdaptorToCatalogue {
  adaptor: string;
}

/**
 * Allows the owner to add a position to the Cellar's position catalogue
 *
 * Represents function `addPositionToCatalogue(uint32 positionId)`
 */
export interface CellarV25_AddPositionToCatalogue {
  positionId: number;
}

/**
 * Changes the cellar's allowed rebalance deviation, which is the percent the total assets of a cellar may deviate
 * during a `callOnAdaptor`(rebalance) call. The maximum allowed deviation is 100000000000000000 (0.1e18), or 10%.
 *
 * Represents function `setRebalanceDeviation(uint256)`
 */
export interface CellarV25_SetRebalanceDeviation {
  newDeviation: string;
}

/**
 * Allows strategist to set the platform cut for the cellar.
 *
 * Represents function `setStrategistPlatformCut(uint64 cut)`
 */
export interface CellarV25_SetStrategistPlatformCut {
  /** The new strategist platform cut */
  newCut: number;
}

/**
 * Allows the caller to increase the share supply cap
 *
 * Represents function `increaseShareSupplyCap(uint192 _newShareSupplyCap)`
 */
export interface CellarV25_IncreaseShareSupplyCap {
  newCap: string;
}

/**
 * Allows the caller to set the share price oracle contract
 *
 * Represents function `setSharePriceOracle(uint256 _registryId, ERC4626SharePriceOracle _sharePriceOracle)`
 */
export interface CellarV25_SetSharePriceOracle {
  /** The oracle registry ID */
  registryId: string;
  /** The oracle contract address */
  sharePriceOracle: string;
}

/**
 * Updates the cellar to use the latest price router in the registry.
 *
 * Represents function `cachePriceRouter(bool checkTotalAssets, uint16 allowableRange, address expectedPriceRouter)`
 */
export interface CellarV25_CachePriceRouter {
  /** Whether to check the total assets of the cellar */
  checkTotalAssets: boolean;
  /** The allowable range of the cellar's total assets to deviate between old and new routers */
  allowableRange: number;
  /** The expected price router address */
  expectedPriceRouter: string;
}

/** Represent a function call initiated through a governance proposal */
export interface CellarV25Governance {
  /** Represents a single function call */
  functionCall?:
    | CellarV25Governance_FunctionCall
    | undefined;
  /** Represents multiple, ordered function calls */
  multicall?: CellarV25Governance_Multicall | undefined;
}

/** The function you wish to execute on the target cellar */
export interface CellarV25Governance_FunctionCall {
  /** Represents function `addAdaptorToCatalogue(address adaptor)` */
  addAdaptorToCatalogue?:
    | CellarV25Governance_AddAdaptorToCatalogue
    | undefined;
  /** Represents function `addPositionToCatalogue(uint32 positionId)` */
  addPositionToCatalogue?:
    | CellarV25Governance_AddPositionToCatalogue
    | undefined;
  /** Represents function `setRebalanceDeviation(uint256)` */
  setRebalanceDeviation?:
    | CellarV25Governance_SetRebalanceDeviation
    | undefined;
  /** Represents function `setStrategistPlatformCut(uint64 cut)` */
  setStrategistPlatformCut?:
    | CellarV25Governance_SetStrategistPlatformCut
    | undefined;
  /** Represents function `forcePositionOut(uint32 index, uint32 positionId, bool inDebtArray)` */
  forcePositionOut?:
    | CellarV25Governance_ForcePositionOut
    | undefined;
  /** Represents function `toggleIgnorePause()` */
  toggleIgnorePause?:
    | CellarV25Governance_ToggleIgnorePause
    | undefined;
  /** Represents function `setSharePriceOracle(uint256 _registryId, ERC4626SharePriceOracle _sharePriceOracle)` */
  setSharePriceOracle?:
    | CellarV25Governance_SetSharePriceOracle
    | undefined;
  /** Represents function `increaseShareSupplyCap(uint192 _newShareSupplyCap)` */
  increaseShareSupplyCap?:
    | CellarV25Governance_IncreaseShareSupplyCap
    | undefined;
  /** Represents function `setAutomatiionActions(uint256 _registryId, address _expectedAutomationActions)` */
  setAutomationActions?:
    | CellarV25Governance_SetAutomationActions
    | undefined;
  /** Represents function `cachePriceRouter(bool checkTotalAssets, uint16 allowableRange, address expectedPriceRouter)` */
  cachePriceRouter?:
    | CellarV25Governance_CachePriceRouter
    | undefined;
  /** Represents function `initiateShutdown()` */
  initiateShutdown?:
    | CellarV25Governance_InitiateShutdown
    | undefined;
  /** Represents function `liftShutdown()` */
  liftShutdown?:
    | CellarV25Governance_LiftShutdown
    | undefined;
  /** Represents function `removeAdaptorFromCatalogue(address adaptor)` */
  removeAdaptorFromCatalogue?:
    | CellarV25Governance_RemoveAdaptorFromCatalogue
    | undefined;
  /** Represents function `removePositionFromCatalogue(uint32 positionId)` */
  removePositionFromCatalogue?:
    | CellarV25Governance_RemovePositionFromCatalogue
    | undefined;
  /** Represents function `decreaseShareSupplyCap(uint192) */
  decreaseShareSupplyCap?:
    | CellarV25Governance_DecreaseShareSupplyCap
    | undefined;
  /** Represents function `setHoldingPosition(uint32 position_id)` */
  setHoldingPosition?:
    | CellarV25Governance_SetHoldingPosition
    | undefined;
  /** Represents function `addPosition(uint256 index, address position)` */
  addPosition?:
    | CellarV25Governance_AddPosition
    | undefined;
  /** Represents function `callOnAdaptor(AdaptorCall[] memory data)` */
  callOnAdaptor?:
    | CellarV25Governance_CallOnAdaptor
    | undefined;
  /** Represents function `removePosition(uint256 index)` */
  removePosition?: CellarV25Governance_RemovePosition | undefined;
}

/**
 * Allows caller to call multiple functions in a single TX.
 *
 * Represents function `multicall(bytes[] data)`
 */
export interface CellarV25Governance_Multicall {
  functionCalls: CellarV25Governance_FunctionCall[];
}

/**
 * Allows the owner to add an adaptor to the Cellar's adaptor catalogue
 *
 * Represents function `addAdaptorToCatalogue(address adaptor)`
 */
export interface CellarV25Governance_AddAdaptorToCatalogue {
  adaptor: string;
}

/**
 * Allows the owner to add a position to the Cellar's position catalogue
 *
 * Represents function `addPositionToCatalogue(uint32 positionId)`
 */
export interface CellarV25Governance_AddPositionToCatalogue {
  positionId: number;
}

/**
 * Changes the cellar's allowed rebalance deviation, which is the percent the total assets of a cellar may deviate
 * during a `callOnAdaptor`(rebalance) call. The maximum allowed deviation is 100000000000000000 (0.1e18), or 10%.
 *
 * Represents function `setRebalanceDeviation(uint256)`
 */
export interface CellarV25Governance_SetRebalanceDeviation {
  newDeviation: string;
}

/**
 * Allows strategist to set the platform cut for the cellar.
 *
 * Represents function `setStrategistPlatformCut(uint64 cut)`
 */
export interface CellarV25Governance_SetStrategistPlatformCut {
  /** The new strategist platform cut */
  newCut: number;
}

/**
 * Allows caller to force a position out of the cellar
 *
 * Represents function `forcePositionOut(uint32 index, uint32 positionId, bool inDebtArray)`
 */
export interface CellarV25Governance_ForcePositionOut {
  index: number;
  positionId: number;
  inDebtArray: boolean;
}

/**
 * Allows caller to toggle the ignorePause flag on the cellar
 *
 * Represents function `toggleIgnorePause()`
 */
export interface CellarV25Governance_ToggleIgnorePause {
}

/**
 * Allows caller to set automation actions
 *
 * Represents function `setAutomatiionActions(uint256 _registryId, address _expectedAutomationActions)`
 */
export interface CellarV25Governance_SetAutomationActions {
  /** The oracle registry ID */
  registryId: string;
  /** The automation actions contract address */
  expectedAutomationActions: string;
}

/**
 * Allows the caller to increase the share supply cap
 *
 * Represents function `increaseShareSupplyCap(uint192 _newShareSupplyCap)`
 */
export interface CellarV25Governance_IncreaseShareSupplyCap {
  newCap: string;
}

/**
 * Allows the caller to set the share price oracle contract
 *
 * Represents function `setSharePriceOracle(uint256 _registryId, ERC4626SharePriceOracle _sharePriceOracle)`
 */
export interface CellarV25Governance_SetSharePriceOracle {
  /** The oracle registry ID */
  registryId: string;
  /** The oracle contract address */
  sharePriceOracle: string;
}

/**
 * Updates the cellar to use the latest price router in the registry.
 *
 * Represents function `cachePriceRouter(bool checkTotalAssets, uint16 allowableRange, address expectedPriceRouter)`
 */
export interface CellarV25Governance_CachePriceRouter {
  /** Whether to check the total assets of the cellar */
  checkTotalAssets: boolean;
  /** The allowable range of the cellar's total assets to deviate between old and new routers */
  allowableRange: number;
  /** The expected price router address */
  expectedPriceRouter: string;
}

/**
 * Shutdown the cellar. Used in an emergency or if the cellar has been deprecated.
 *
 * Represents function `initiateShutdown()`
 */
export interface CellarV25Governance_InitiateShutdown {
}

/**
 * Allows the owner to restart a shut down Cellar
 *
 * Represents function `liftShutdown()`
 */
export interface CellarV25Governance_LiftShutdown {
}

/**
 * Allows callers to remove adaptors from this cellar's catalogue
 *
 * Represents function `removeAdaptorFromCatalogue(address adaptor)`
 */
export interface CellarV25Governance_RemoveAdaptorFromCatalogue {
  adaptor: string;
}

/**
 * Allows caller to remove positions from this cellar's catalogue
 *
 * Represents function `removePositionFromCatalogue(uint32 positionId)`
 */
export interface CellarV25Governance_RemovePositionFromCatalogue {
  positionId: number;
}

/**
 * Allows strategist to decrease the share supply cap
 *
 * Represents function `decreaseShareSupplyCap(uint192)`
 */
export interface CellarV25Governance_DecreaseShareSupplyCap {
  newCap: string;
}

/**
 * Set the holding position used of the cellar.
 *
 * Represents function `setHoldingIndex(uint8 index)`
 */
export interface CellarV25Governance_SetHoldingPosition {
  /** ID (index) of the new holding position to use */
  positionId: number;
}

/**
 * Insert a trusted position to the list of positions used by the cellar at a given index.
 *
 * Represents function `addPosition(uint32 index, uint32 positionId, bytes configurationData, bool inDebtArray)`
 */
export interface CellarV25Governance_AddPosition {
  /** Index at which to add the position */
  index: number;
  /** The position's ID in the cellar registry */
  positionId: number;
  /** Data used to configure how the position behaves */
  configurationData: Uint8Array;
  /** Whether to add position in the debt array, or the credit array. */
  inDebtArray: boolean;
}

/**
 * Allows strategists to manage their Cellar using arbitrary logic calls to adaptors.
 *
 * Represents function `callOnAdaptor(AdaptorCall[] memory data)`
 */
export interface CellarV25Governance_CallOnAdaptor {
  data: AdaptorCall[];
}

/**
 * Remove the position at a given index from the list of positions used by the cellar.
 *
 * Represents function `removePosition(uint32 index, bool inDebtArray)`
 */
export interface CellarV25Governance_RemovePosition {
  /** Index at which to remove the position */
  index: number;
  /** Whether to remove position from the debt array, or the credit array. */
  inDebtArray: boolean;
}

/** Represents a call to adaptor an. The cellar must be authorized to call the target adaptor. */
export interface AdaptorCall {
  /** Address of the adaptor */
  adaptor: string;
  /** Represents function calls to the AaveATokenAdaptor V1 */
  aaveATokenV1Calls?:
    | AaveATokenAdaptorV1Calls
    | undefined;
  /** Represents function calls to the AavaDebtTokenAdaptor V1 */
  aaveDebtTokenV1Calls?:
    | AaveDebtTokenAdaptorV1Calls
    | undefined;
  /** Represents function calls to the CompoundCTokenAdaptor V2 */
  compoundCTokenV2Calls?:
    | CompoundCTokenAdaptorV2Calls
    | undefined;
  /** Represents function calls to the AaveATokenV2Adaptor */
  aaveATokenV2Calls?:
    | AaveATokenAdaptorV2Calls
    | undefined;
  /** Represents function calls to the AavaDebtTokenV2Adaptor */
  aaveDebtTokenV2Calls?:
    | AaveDebtTokenAdaptorV2Calls
    | undefined;
  /** Represents function calls to the AaveATokenV1Adaptor */
  aaveV3ATokenV1Calls?:
    | AaveV3ATokenAdaptorV1Calls
    | undefined;
  /** Represents function calls to the AavaDebtTokenV1Adaptor */
  aaveV3DebtTokenV1Calls?:
    | AaveV3DebtTokenAdaptorV1Calls
    | undefined;
  /** Represents function calls to the OneInchAdaptorV1 */
  oneInchV1Calls?:
    | OneInchAdaptorV1Calls
    | undefined;
  /** Represents function calls to the FeesAndReservesAdaptorV1 */
  feesAndReservesV1Calls?:
    | FeesAndReservesAdaptorV1Calls
    | undefined;
  /** Represents functionc alls to the ZeroXAdaptorV1 */
  zeroXV1Calls?:
    | ZeroXAdaptorV1Calls
    | undefined;
  /** Represents function calls to the SwapWithUniswapAdaptorV1 */
  swapWithUniswapV1Calls?:
    | SwapWithUniswapAdaptorV1Calls
    | undefined;
  /** Represents function calls to VestingSimpleAdaptor */
  vestingSimpleV2Calls?:
    | VestingSimpleAdaptorV2Calls
    | undefined;
  /** Represents function calls to the CellarAdaptor */
  cellarV1Calls?:
    | CellarAdaptorV1Calls
    | undefined;
  /** Represents function calls to the UniswapV3Adaptor V2 */
  uniswapV3V2Calls?:
    | UniswapV3AdaptorV2Calls
    | undefined;
  /** Represents function calls to the AaveV2EnableAssetAsCollatorAdaptor V1 */
  aaveV2EnableAssetAsCollateralV1Calls?:
    | AaveV2EnableAssetAsCollateralAdaptorV1Calls
    | undefined;
  /** Represents function calls to the FTokenAdaptor V1 */
  fTokenV1Calls?:
    | FTokenAdaptorV1Calls
    | undefined;
  /** Represents function calls to the MorphoAaveV2AToken V1 */
  morphoAaveV2ATokenV1Calls?:
    | MorphoAaveV2ATokenAdaptorV1Calls
    | undefined;
  /** Represents function calls to the MorphoAaveV2DebtToken V1 */
  morphoAaveV2DebtTokenV1Calls?:
    | MorphoAaveV2DebtTokenAdaptorV1Calls
    | undefined;
  /** Represents function calls to the MorphoAaveV3ATokenCollateral V1 */
  morphoAaveV3ATokenCollateralV1Calls?:
    | MorphoAaveV3ATokenCollateralAdaptorV1Calls
    | undefined;
  /** Represents function calls to the MorphoAaveV3ATokenP2P V1 */
  morphoAaveV3ATokenP2pV1Calls?:
    | MorphoAaveV3ATokenP2PAdaptorV1Calls
    | undefined;
  /** Represents function calls to the MorphoAaveV3DebtToken V1 */
  morphoAaveV3DebtTokenV1Calls?:
    | MorphoAaveV3DebtTokenAdaptorV1Calls
    | undefined;
  /** Represents function calls to the BalancerPoolAdaptor V1 */
  balancerPoolV1Calls?:
    | BalancerPoolAdaptorV1Calls
    | undefined;
  /** Represents function calls to the LegacyCellarAdaptor V1 */
  legacyCellarV1Calls?:
    | LegacyCellarAdaptorV1Calls
    | undefined;
  /** Represents function calls to the DebtFTokenAdaptor V1 */
  debtFTokenV1Calls?:
    | DebtFTokenAdaptorV1Calls
    | undefined;
  /** Represents function calls to the CollateralFTokenAdaptor V1 */
  collateralFTokenV1Calls?:
    | CollateralFTokenAdaptorV1Calls
    | undefined;
  /** Represents function call for the AaveV3DebtTokenAdaptorV1 */
  aaveV3DebtTokenV1FlashLoanCalls?:
    | AaveV3DebtTokenAdaptorV1FlashLoanCalls
    | undefined;
  /** Represents function call for the BalancerPoolAdaptorV1 */
  balancerPoolV1FlashLoanCalls?:
    | BalancerPoolAdaptorV1FlashLoanCalls
    | undefined;
  /** Represents function calls for the ConvexCurveAdaptorV1 */
  convexCurveV1Calls?:
    | ConvexCurveAdaptorV1Calls
    | undefined;
  /** Represents function calls for the CurveAdaptorV1 */
  curveV1Calls?:
    | CurveAdaptorV1Calls
    | undefined;
  /** Represents function calls for the AuraERC4626AdaptorV1 */
  auraErc4626V1Calls?:
    | AuraERC4626AdaptorV1Calls
    | undefined;
  /** Represents function calls for the MorphoBlueCollateralAdaptorV1 */
  morphoBlueCollateralV1Calls?:
    | MorphoBlueCollateralAdaptorV1Calls
    | undefined;
  /** Represents function calls for the MorphoBlueDebtAdaptorV1 */
  morphoBlueDebtV1Calls?:
    | MorphoBlueDebtAdaptorV1Calls
    | undefined;
  /** Represents function calls for the MorphoBlueSupplyAdaptorV1 */
  morphoBlueSupplyV1Calls?:
    | MorphoBlueSupplyAdaptorV1Calls
    | undefined;
  /** Represents function calls for the ERC4626AdaptorV1 */
  erc4626V1Calls?:
    | ERC4626AdaptorV1Calls
    | undefined;
  /** Represents function calls for the StakingAdaptorV1 */
  stakingV1Calls?: StakingAdaptorV1Calls | undefined;
}

function createBaseCellarV2(): CellarV2 {
  return {
    callOnAdaptor: undefined,
    removePosition: undefined,
    setHoldingPosition: undefined,
    setStrategistPayoutAddress: undefined,
    swapPositions: undefined,
    setShareLockPeriod: undefined,
    addPosition: undefined,
    setupAdaptor: undefined,
    initiateShutdown: undefined,
    liftShutdown: undefined,
    setPlatformFee: undefined,
    setStrategistPlatformCut: undefined,
    setRebalanceDeviation: undefined,
  };
}

export const CellarV2 = {
  encode(message: CellarV2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.callOnAdaptor !== undefined) {
      CellarV2_CallOnAdaptor.encode(message.callOnAdaptor, writer.uint32(10).fork()).ldelim();
    }
    if (message.removePosition !== undefined) {
      CellarV2_RemovePosition.encode(message.removePosition, writer.uint32(18).fork()).ldelim();
    }
    if (message.setHoldingPosition !== undefined) {
      CellarV2_SetHoldingPosition.encode(message.setHoldingPosition, writer.uint32(26).fork()).ldelim();
    }
    if (message.setStrategistPayoutAddress !== undefined) {
      CellarV2_SetStrategistPayoutAddress.encode(message.setStrategistPayoutAddress, writer.uint32(34).fork()).ldelim();
    }
    if (message.swapPositions !== undefined) {
      CellarV2_SwapPositions.encode(message.swapPositions, writer.uint32(42).fork()).ldelim();
    }
    if (message.setShareLockPeriod !== undefined) {
      CellarV2_SetShareLockPeriod.encode(message.setShareLockPeriod, writer.uint32(50).fork()).ldelim();
    }
    if (message.addPosition !== undefined) {
      CellarV2_AddPosition.encode(message.addPosition, writer.uint32(58).fork()).ldelim();
    }
    if (message.setupAdaptor !== undefined) {
      CellarV2_SetupAdaptor.encode(message.setupAdaptor, writer.uint32(66).fork()).ldelim();
    }
    if (message.initiateShutdown !== undefined) {
      CellarV2_InitiateShutdown.encode(message.initiateShutdown, writer.uint32(74).fork()).ldelim();
    }
    if (message.liftShutdown !== undefined) {
      CellarV2_LiftShutdown.encode(message.liftShutdown, writer.uint32(82).fork()).ldelim();
    }
    if (message.setPlatformFee !== undefined) {
      CellarV2_SetPlatformFee.encode(message.setPlatformFee, writer.uint32(90).fork()).ldelim();
    }
    if (message.setStrategistPlatformCut !== undefined) {
      CellarV2_SetStrategistPlatformCut.encode(message.setStrategistPlatformCut, writer.uint32(98).fork()).ldelim();
    }
    if (message.setRebalanceDeviation !== undefined) {
      CellarV2_SetRebalanceDeviation.encode(message.setRebalanceDeviation, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV2 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.callOnAdaptor = CellarV2_CallOnAdaptor.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.removePosition = CellarV2_RemovePosition.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.setHoldingPosition = CellarV2_SetHoldingPosition.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.setStrategistPayoutAddress = CellarV2_SetStrategistPayoutAddress.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.swapPositions = CellarV2_SwapPositions.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.setShareLockPeriod = CellarV2_SetShareLockPeriod.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.addPosition = CellarV2_AddPosition.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.setupAdaptor = CellarV2_SetupAdaptor.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.initiateShutdown = CellarV2_InitiateShutdown.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.liftShutdown = CellarV2_LiftShutdown.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.setPlatformFee = CellarV2_SetPlatformFee.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.setStrategistPlatformCut = CellarV2_SetStrategistPlatformCut.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.setRebalanceDeviation = CellarV2_SetRebalanceDeviation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV2 {
    return {
      callOnAdaptor: isSet(object.callOnAdaptor) ? CellarV2_CallOnAdaptor.fromJSON(object.callOnAdaptor) : undefined,
      removePosition: isSet(object.removePosition)
        ? CellarV2_RemovePosition.fromJSON(object.removePosition)
        : undefined,
      setHoldingPosition: isSet(object.setHoldingPosition)
        ? CellarV2_SetHoldingPosition.fromJSON(object.setHoldingPosition)
        : undefined,
      setStrategistPayoutAddress: isSet(object.setStrategistPayoutAddress)
        ? CellarV2_SetStrategistPayoutAddress.fromJSON(object.setStrategistPayoutAddress)
        : undefined,
      swapPositions: isSet(object.swapPositions) ? CellarV2_SwapPositions.fromJSON(object.swapPositions) : undefined,
      setShareLockPeriod: isSet(object.setShareLockPeriod)
        ? CellarV2_SetShareLockPeriod.fromJSON(object.setShareLockPeriod)
        : undefined,
      addPosition: isSet(object.addPosition) ? CellarV2_AddPosition.fromJSON(object.addPosition) : undefined,
      setupAdaptor: isSet(object.setupAdaptor) ? CellarV2_SetupAdaptor.fromJSON(object.setupAdaptor) : undefined,
      initiateShutdown: isSet(object.initiateShutdown)
        ? CellarV2_InitiateShutdown.fromJSON(object.initiateShutdown)
        : undefined,
      liftShutdown: isSet(object.liftShutdown) ? CellarV2_LiftShutdown.fromJSON(object.liftShutdown) : undefined,
      setPlatformFee: isSet(object.setPlatformFee)
        ? CellarV2_SetPlatformFee.fromJSON(object.setPlatformFee)
        : undefined,
      setStrategistPlatformCut: isSet(object.setStrategistPlatformCut)
        ? CellarV2_SetStrategistPlatformCut.fromJSON(object.setStrategistPlatformCut)
        : undefined,
      setRebalanceDeviation: isSet(object.setRebalanceDeviation)
        ? CellarV2_SetRebalanceDeviation.fromJSON(object.setRebalanceDeviation)
        : undefined,
    };
  },

  toJSON(message: CellarV2): unknown {
    const obj: any = {};
    if (message.callOnAdaptor !== undefined) {
      obj.callOnAdaptor = CellarV2_CallOnAdaptor.toJSON(message.callOnAdaptor);
    }
    if (message.removePosition !== undefined) {
      obj.removePosition = CellarV2_RemovePosition.toJSON(message.removePosition);
    }
    if (message.setHoldingPosition !== undefined) {
      obj.setHoldingPosition = CellarV2_SetHoldingPosition.toJSON(message.setHoldingPosition);
    }
    if (message.setStrategistPayoutAddress !== undefined) {
      obj.setStrategistPayoutAddress = CellarV2_SetStrategistPayoutAddress.toJSON(message.setStrategistPayoutAddress);
    }
    if (message.swapPositions !== undefined) {
      obj.swapPositions = CellarV2_SwapPositions.toJSON(message.swapPositions);
    }
    if (message.setShareLockPeriod !== undefined) {
      obj.setShareLockPeriod = CellarV2_SetShareLockPeriod.toJSON(message.setShareLockPeriod);
    }
    if (message.addPosition !== undefined) {
      obj.addPosition = CellarV2_AddPosition.toJSON(message.addPosition);
    }
    if (message.setupAdaptor !== undefined) {
      obj.setupAdaptor = CellarV2_SetupAdaptor.toJSON(message.setupAdaptor);
    }
    if (message.initiateShutdown !== undefined) {
      obj.initiateShutdown = CellarV2_InitiateShutdown.toJSON(message.initiateShutdown);
    }
    if (message.liftShutdown !== undefined) {
      obj.liftShutdown = CellarV2_LiftShutdown.toJSON(message.liftShutdown);
    }
    if (message.setPlatformFee !== undefined) {
      obj.setPlatformFee = CellarV2_SetPlatformFee.toJSON(message.setPlatformFee);
    }
    if (message.setStrategistPlatformCut !== undefined) {
      obj.setStrategistPlatformCut = CellarV2_SetStrategistPlatformCut.toJSON(message.setStrategistPlatformCut);
    }
    if (message.setRebalanceDeviation !== undefined) {
      obj.setRebalanceDeviation = CellarV2_SetRebalanceDeviation.toJSON(message.setRebalanceDeviation);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV2>, I>>(base?: I): CellarV2 {
    return CellarV2.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV2>, I>>(object: I): CellarV2 {
    const message = createBaseCellarV2();
    message.callOnAdaptor = (object.callOnAdaptor !== undefined && object.callOnAdaptor !== null)
      ? CellarV2_CallOnAdaptor.fromPartial(object.callOnAdaptor)
      : undefined;
    message.removePosition = (object.removePosition !== undefined && object.removePosition !== null)
      ? CellarV2_RemovePosition.fromPartial(object.removePosition)
      : undefined;
    message.setHoldingPosition = (object.setHoldingPosition !== undefined && object.setHoldingPosition !== null)
      ? CellarV2_SetHoldingPosition.fromPartial(object.setHoldingPosition)
      : undefined;
    message.setStrategistPayoutAddress =
      (object.setStrategistPayoutAddress !== undefined && object.setStrategistPayoutAddress !== null)
        ? CellarV2_SetStrategistPayoutAddress.fromPartial(object.setStrategistPayoutAddress)
        : undefined;
    message.swapPositions = (object.swapPositions !== undefined && object.swapPositions !== null)
      ? CellarV2_SwapPositions.fromPartial(object.swapPositions)
      : undefined;
    message.setShareLockPeriod = (object.setShareLockPeriod !== undefined && object.setShareLockPeriod !== null)
      ? CellarV2_SetShareLockPeriod.fromPartial(object.setShareLockPeriod)
      : undefined;
    message.addPosition = (object.addPosition !== undefined && object.addPosition !== null)
      ? CellarV2_AddPosition.fromPartial(object.addPosition)
      : undefined;
    message.setupAdaptor = (object.setupAdaptor !== undefined && object.setupAdaptor !== null)
      ? CellarV2_SetupAdaptor.fromPartial(object.setupAdaptor)
      : undefined;
    message.initiateShutdown = (object.initiateShutdown !== undefined && object.initiateShutdown !== null)
      ? CellarV2_InitiateShutdown.fromPartial(object.initiateShutdown)
      : undefined;
    message.liftShutdown = (object.liftShutdown !== undefined && object.liftShutdown !== null)
      ? CellarV2_LiftShutdown.fromPartial(object.liftShutdown)
      : undefined;
    message.setPlatformFee = (object.setPlatformFee !== undefined && object.setPlatformFee !== null)
      ? CellarV2_SetPlatformFee.fromPartial(object.setPlatformFee)
      : undefined;
    message.setStrategistPlatformCut =
      (object.setStrategistPlatformCut !== undefined && object.setStrategistPlatformCut !== null)
        ? CellarV2_SetStrategistPlatformCut.fromPartial(object.setStrategistPlatformCut)
        : undefined;
    message.setRebalanceDeviation =
      (object.setRebalanceDeviation !== undefined && object.setRebalanceDeviation !== null)
        ? CellarV2_SetRebalanceDeviation.fromPartial(object.setRebalanceDeviation)
        : undefined;
    return message;
  },
};

function createBaseCellarV2_CallOnAdaptor(): CellarV2_CallOnAdaptor {
  return { data: [] };
}

export const CellarV2_CallOnAdaptor = {
  encode(message: CellarV2_CallOnAdaptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.data) {
      AdaptorCall.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV2_CallOnAdaptor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV2_CallOnAdaptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data.push(AdaptorCall.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV2_CallOnAdaptor {
    return { data: globalThis.Array.isArray(object?.data) ? object.data.map((e: any) => AdaptorCall.fromJSON(e)) : [] };
  },

  toJSON(message: CellarV2_CallOnAdaptor): unknown {
    const obj: any = {};
    if (message.data?.length) {
      obj.data = message.data.map((e) => AdaptorCall.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV2_CallOnAdaptor>, I>>(base?: I): CellarV2_CallOnAdaptor {
    return CellarV2_CallOnAdaptor.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV2_CallOnAdaptor>, I>>(object: I): CellarV2_CallOnAdaptor {
    const message = createBaseCellarV2_CallOnAdaptor();
    message.data = object.data?.map((e) => AdaptorCall.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCellarV2_RemovePosition(): CellarV2_RemovePosition {
  return { index: 0, inDebtArray: false };
}

export const CellarV2_RemovePosition = {
  encode(message: CellarV2_RemovePosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.inDebtArray === true) {
      writer.uint32(16).bool(message.inDebtArray);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV2_RemovePosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV2_RemovePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.index = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.inDebtArray = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV2_RemovePosition {
    return {
      index: isSet(object.index) ? globalThis.Number(object.index) : 0,
      inDebtArray: isSet(object.inDebtArray) ? globalThis.Boolean(object.inDebtArray) : false,
    };
  },

  toJSON(message: CellarV2_RemovePosition): unknown {
    const obj: any = {};
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    if (message.inDebtArray === true) {
      obj.inDebtArray = message.inDebtArray;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV2_RemovePosition>, I>>(base?: I): CellarV2_RemovePosition {
    return CellarV2_RemovePosition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV2_RemovePosition>, I>>(object: I): CellarV2_RemovePosition {
    const message = createBaseCellarV2_RemovePosition();
    message.index = object.index ?? 0;
    message.inDebtArray = object.inDebtArray ?? false;
    return message;
  },
};

function createBaseCellarV2_SetHoldingPosition(): CellarV2_SetHoldingPosition {
  return { positionId: 0 };
}

export const CellarV2_SetHoldingPosition = {
  encode(message: CellarV2_SetHoldingPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.positionId !== 0) {
      writer.uint32(8).uint32(message.positionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV2_SetHoldingPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV2_SetHoldingPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.positionId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV2_SetHoldingPosition {
    return { positionId: isSet(object.positionId) ? globalThis.Number(object.positionId) : 0 };
  },

  toJSON(message: CellarV2_SetHoldingPosition): unknown {
    const obj: any = {};
    if (message.positionId !== 0) {
      obj.positionId = Math.round(message.positionId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV2_SetHoldingPosition>, I>>(base?: I): CellarV2_SetHoldingPosition {
    return CellarV2_SetHoldingPosition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV2_SetHoldingPosition>, I>>(object: I): CellarV2_SetHoldingPosition {
    const message = createBaseCellarV2_SetHoldingPosition();
    message.positionId = object.positionId ?? 0;
    return message;
  },
};

function createBaseCellarV2_SetStrategistPayoutAddress(): CellarV2_SetStrategistPayoutAddress {
  return { payout: "" };
}

export const CellarV2_SetStrategistPayoutAddress = {
  encode(message: CellarV2_SetStrategistPayoutAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payout !== "") {
      writer.uint32(10).string(message.payout);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV2_SetStrategistPayoutAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV2_SetStrategistPayoutAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payout = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV2_SetStrategistPayoutAddress {
    return { payout: isSet(object.payout) ? globalThis.String(object.payout) : "" };
  },

  toJSON(message: CellarV2_SetStrategistPayoutAddress): unknown {
    const obj: any = {};
    if (message.payout !== "") {
      obj.payout = message.payout;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV2_SetStrategistPayoutAddress>, I>>(
    base?: I,
  ): CellarV2_SetStrategistPayoutAddress {
    return CellarV2_SetStrategistPayoutAddress.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV2_SetStrategistPayoutAddress>, I>>(
    object: I,
  ): CellarV2_SetStrategistPayoutAddress {
    const message = createBaseCellarV2_SetStrategistPayoutAddress();
    message.payout = object.payout ?? "";
    return message;
  },
};

function createBaseCellarV2_SwapPositions(): CellarV2_SwapPositions {
  return { index1: 0, index2: 0, inDebtArray: false };
}

export const CellarV2_SwapPositions = {
  encode(message: CellarV2_SwapPositions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index1 !== 0) {
      writer.uint32(8).uint32(message.index1);
    }
    if (message.index2 !== 0) {
      writer.uint32(16).uint32(message.index2);
    }
    if (message.inDebtArray === true) {
      writer.uint32(24).bool(message.inDebtArray);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV2_SwapPositions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV2_SwapPositions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.index1 = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.index2 = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.inDebtArray = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV2_SwapPositions {
    return {
      index1: isSet(object.index1) ? globalThis.Number(object.index1) : 0,
      index2: isSet(object.index2) ? globalThis.Number(object.index2) : 0,
      inDebtArray: isSet(object.inDebtArray) ? globalThis.Boolean(object.inDebtArray) : false,
    };
  },

  toJSON(message: CellarV2_SwapPositions): unknown {
    const obj: any = {};
    if (message.index1 !== 0) {
      obj.index1 = Math.round(message.index1);
    }
    if (message.index2 !== 0) {
      obj.index2 = Math.round(message.index2);
    }
    if (message.inDebtArray === true) {
      obj.inDebtArray = message.inDebtArray;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV2_SwapPositions>, I>>(base?: I): CellarV2_SwapPositions {
    return CellarV2_SwapPositions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV2_SwapPositions>, I>>(object: I): CellarV2_SwapPositions {
    const message = createBaseCellarV2_SwapPositions();
    message.index1 = object.index1 ?? 0;
    message.index2 = object.index2 ?? 0;
    message.inDebtArray = object.inDebtArray ?? false;
    return message;
  },
};

function createBaseCellarV2_SetShareLockPeriod(): CellarV2_SetShareLockPeriod {
  return { newLock: "" };
}

export const CellarV2_SetShareLockPeriod = {
  encode(message: CellarV2_SetShareLockPeriod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newLock !== "") {
      writer.uint32(10).string(message.newLock);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV2_SetShareLockPeriod {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV2_SetShareLockPeriod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.newLock = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV2_SetShareLockPeriod {
    return { newLock: isSet(object.newLock) ? globalThis.String(object.newLock) : "" };
  },

  toJSON(message: CellarV2_SetShareLockPeriod): unknown {
    const obj: any = {};
    if (message.newLock !== "") {
      obj.newLock = message.newLock;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV2_SetShareLockPeriod>, I>>(base?: I): CellarV2_SetShareLockPeriod {
    return CellarV2_SetShareLockPeriod.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV2_SetShareLockPeriod>, I>>(object: I): CellarV2_SetShareLockPeriod {
    const message = createBaseCellarV2_SetShareLockPeriod();
    message.newLock = object.newLock ?? "";
    return message;
  },
};

function createBaseCellarV2_AddPosition(): CellarV2_AddPosition {
  return { index: 0, positionId: 0, configurationData: new Uint8Array(0), inDebtArray: false };
}

export const CellarV2_AddPosition = {
  encode(message: CellarV2_AddPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.positionId !== 0) {
      writer.uint32(16).uint32(message.positionId);
    }
    if (message.configurationData.length !== 0) {
      writer.uint32(26).bytes(message.configurationData);
    }
    if (message.inDebtArray === true) {
      writer.uint32(32).bool(message.inDebtArray);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV2_AddPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV2_AddPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.index = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.positionId = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.configurationData = reader.bytes();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.inDebtArray = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV2_AddPosition {
    return {
      index: isSet(object.index) ? globalThis.Number(object.index) : 0,
      positionId: isSet(object.positionId) ? globalThis.Number(object.positionId) : 0,
      configurationData: isSet(object.configurationData)
        ? bytesFromBase64(object.configurationData)
        : new Uint8Array(0),
      inDebtArray: isSet(object.inDebtArray) ? globalThis.Boolean(object.inDebtArray) : false,
    };
  },

  toJSON(message: CellarV2_AddPosition): unknown {
    const obj: any = {};
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    if (message.positionId !== 0) {
      obj.positionId = Math.round(message.positionId);
    }
    if (message.configurationData.length !== 0) {
      obj.configurationData = base64FromBytes(message.configurationData);
    }
    if (message.inDebtArray === true) {
      obj.inDebtArray = message.inDebtArray;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV2_AddPosition>, I>>(base?: I): CellarV2_AddPosition {
    return CellarV2_AddPosition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV2_AddPosition>, I>>(object: I): CellarV2_AddPosition {
    const message = createBaseCellarV2_AddPosition();
    message.index = object.index ?? 0;
    message.positionId = object.positionId ?? 0;
    message.configurationData = object.configurationData ?? new Uint8Array(0);
    message.inDebtArray = object.inDebtArray ?? false;
    return message;
  },
};

function createBaseCellarV2_InitiateShutdown(): CellarV2_InitiateShutdown {
  return {};
}

export const CellarV2_InitiateShutdown = {
  encode(_: CellarV2_InitiateShutdown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV2_InitiateShutdown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV2_InitiateShutdown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): CellarV2_InitiateShutdown {
    return {};
  },

  toJSON(_: CellarV2_InitiateShutdown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV2_InitiateShutdown>, I>>(base?: I): CellarV2_InitiateShutdown {
    return CellarV2_InitiateShutdown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV2_InitiateShutdown>, I>>(_: I): CellarV2_InitiateShutdown {
    const message = createBaseCellarV2_InitiateShutdown();
    return message;
  },
};

function createBaseCellarV2_LiftShutdown(): CellarV2_LiftShutdown {
  return {};
}

export const CellarV2_LiftShutdown = {
  encode(_: CellarV2_LiftShutdown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV2_LiftShutdown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV2_LiftShutdown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): CellarV2_LiftShutdown {
    return {};
  },

  toJSON(_: CellarV2_LiftShutdown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV2_LiftShutdown>, I>>(base?: I): CellarV2_LiftShutdown {
    return CellarV2_LiftShutdown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV2_LiftShutdown>, I>>(_: I): CellarV2_LiftShutdown {
    const message = createBaseCellarV2_LiftShutdown();
    return message;
  },
};

function createBaseCellarV2_SetPlatformFee(): CellarV2_SetPlatformFee {
  return { amount: 0 };
}

export const CellarV2_SetPlatformFee = {
  encode(message: CellarV2_SetPlatformFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== 0) {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV2_SetPlatformFee {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV2_SetPlatformFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.amount = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV2_SetPlatformFee {
    return { amount: isSet(object.amount) ? globalThis.Number(object.amount) : 0 };
  },

  toJSON(message: CellarV2_SetPlatformFee): unknown {
    const obj: any = {};
    if (message.amount !== 0) {
      obj.amount = Math.round(message.amount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV2_SetPlatformFee>, I>>(base?: I): CellarV2_SetPlatformFee {
    return CellarV2_SetPlatformFee.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV2_SetPlatformFee>, I>>(object: I): CellarV2_SetPlatformFee {
    const message = createBaseCellarV2_SetPlatformFee();
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseCellarV2_SetStrategistPlatformCut(): CellarV2_SetStrategistPlatformCut {
  return { amount: 0 };
}

export const CellarV2_SetStrategistPlatformCut = {
  encode(message: CellarV2_SetStrategistPlatformCut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== 0) {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV2_SetStrategistPlatformCut {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV2_SetStrategistPlatformCut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.amount = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV2_SetStrategistPlatformCut {
    return { amount: isSet(object.amount) ? globalThis.Number(object.amount) : 0 };
  },

  toJSON(message: CellarV2_SetStrategistPlatformCut): unknown {
    const obj: any = {};
    if (message.amount !== 0) {
      obj.amount = Math.round(message.amount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV2_SetStrategistPlatformCut>, I>>(
    base?: I,
  ): CellarV2_SetStrategistPlatformCut {
    return CellarV2_SetStrategistPlatformCut.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV2_SetStrategistPlatformCut>, I>>(
    object: I,
  ): CellarV2_SetStrategistPlatformCut {
    const message = createBaseCellarV2_SetStrategistPlatformCut();
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseCellarV2_SetupAdaptor(): CellarV2_SetupAdaptor {
  return { adaptor: "" };
}

export const CellarV2_SetupAdaptor = {
  encode(message: CellarV2_SetupAdaptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.adaptor !== "") {
      writer.uint32(10).string(message.adaptor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV2_SetupAdaptor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV2_SetupAdaptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.adaptor = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV2_SetupAdaptor {
    return { adaptor: isSet(object.adaptor) ? globalThis.String(object.adaptor) : "" };
  },

  toJSON(message: CellarV2_SetupAdaptor): unknown {
    const obj: any = {};
    if (message.adaptor !== "") {
      obj.adaptor = message.adaptor;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV2_SetupAdaptor>, I>>(base?: I): CellarV2_SetupAdaptor {
    return CellarV2_SetupAdaptor.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV2_SetupAdaptor>, I>>(object: I): CellarV2_SetupAdaptor {
    const message = createBaseCellarV2_SetupAdaptor();
    message.adaptor = object.adaptor ?? "";
    return message;
  },
};

function createBaseCellarV2_SetRebalanceDeviation(): CellarV2_SetRebalanceDeviation {
  return { newDeviation: "" };
}

export const CellarV2_SetRebalanceDeviation = {
  encode(message: CellarV2_SetRebalanceDeviation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newDeviation !== "") {
      writer.uint32(10).string(message.newDeviation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV2_SetRebalanceDeviation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV2_SetRebalanceDeviation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.newDeviation = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV2_SetRebalanceDeviation {
    return { newDeviation: isSet(object.newDeviation) ? globalThis.String(object.newDeviation) : "" };
  },

  toJSON(message: CellarV2_SetRebalanceDeviation): unknown {
    const obj: any = {};
    if (message.newDeviation !== "") {
      obj.newDeviation = message.newDeviation;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV2_SetRebalanceDeviation>, I>>(base?: I): CellarV2_SetRebalanceDeviation {
    return CellarV2_SetRebalanceDeviation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV2_SetRebalanceDeviation>, I>>(
    object: I,
  ): CellarV2_SetRebalanceDeviation {
    const message = createBaseCellarV2_SetRebalanceDeviation();
    message.newDeviation = object.newDeviation ?? "";
    return message;
  },
};

function createBaseCellarV2Governance(): CellarV2Governance {
  return {
    initiateShutdown: undefined,
    liftShutdown: undefined,
    setPlatformFee: undefined,
    setStrategistPlatformCut: undefined,
    setupAdaptor: undefined,
    setRebalanceDeviation: undefined,
  };
}

export const CellarV2Governance = {
  encode(message: CellarV2Governance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.initiateShutdown !== undefined) {
      CellarV2Governance_InitiateShutdown.encode(message.initiateShutdown, writer.uint32(10).fork()).ldelim();
    }
    if (message.liftShutdown !== undefined) {
      CellarV2Governance_LiftShutdown.encode(message.liftShutdown, writer.uint32(18).fork()).ldelim();
    }
    if (message.setPlatformFee !== undefined) {
      CellarV2Governance_SetPlatformFee.encode(message.setPlatformFee, writer.uint32(26).fork()).ldelim();
    }
    if (message.setStrategistPlatformCut !== undefined) {
      CellarV2Governance_SetStrategistPlatformCut.encode(message.setStrategistPlatformCut, writer.uint32(34).fork())
        .ldelim();
    }
    if (message.setupAdaptor !== undefined) {
      CellarV2Governance_SetupAdaptor.encode(message.setupAdaptor, writer.uint32(42).fork()).ldelim();
    }
    if (message.setRebalanceDeviation !== undefined) {
      CellarV2Governance_SetRebalanceDeviation.encode(message.setRebalanceDeviation, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV2Governance {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV2Governance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.initiateShutdown = CellarV2Governance_InitiateShutdown.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.liftShutdown = CellarV2Governance_LiftShutdown.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.setPlatformFee = CellarV2Governance_SetPlatformFee.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.setStrategistPlatformCut = CellarV2Governance_SetStrategistPlatformCut.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.setupAdaptor = CellarV2Governance_SetupAdaptor.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.setRebalanceDeviation = CellarV2Governance_SetRebalanceDeviation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV2Governance {
    return {
      initiateShutdown: isSet(object.initiateShutdown)
        ? CellarV2Governance_InitiateShutdown.fromJSON(object.initiateShutdown)
        : undefined,
      liftShutdown: isSet(object.liftShutdown)
        ? CellarV2Governance_LiftShutdown.fromJSON(object.liftShutdown)
        : undefined,
      setPlatformFee: isSet(object.setPlatformFee)
        ? CellarV2Governance_SetPlatformFee.fromJSON(object.setPlatformFee)
        : undefined,
      setStrategistPlatformCut: isSet(object.setStrategistPlatformCut)
        ? CellarV2Governance_SetStrategistPlatformCut.fromJSON(object.setStrategistPlatformCut)
        : undefined,
      setupAdaptor: isSet(object.setupAdaptor)
        ? CellarV2Governance_SetupAdaptor.fromJSON(object.setupAdaptor)
        : undefined,
      setRebalanceDeviation: isSet(object.setRebalanceDeviation)
        ? CellarV2Governance_SetRebalanceDeviation.fromJSON(object.setRebalanceDeviation)
        : undefined,
    };
  },

  toJSON(message: CellarV2Governance): unknown {
    const obj: any = {};
    if (message.initiateShutdown !== undefined) {
      obj.initiateShutdown = CellarV2Governance_InitiateShutdown.toJSON(message.initiateShutdown);
    }
    if (message.liftShutdown !== undefined) {
      obj.liftShutdown = CellarV2Governance_LiftShutdown.toJSON(message.liftShutdown);
    }
    if (message.setPlatformFee !== undefined) {
      obj.setPlatformFee = CellarV2Governance_SetPlatformFee.toJSON(message.setPlatformFee);
    }
    if (message.setStrategistPlatformCut !== undefined) {
      obj.setStrategistPlatformCut = CellarV2Governance_SetStrategistPlatformCut.toJSON(
        message.setStrategistPlatformCut,
      );
    }
    if (message.setupAdaptor !== undefined) {
      obj.setupAdaptor = CellarV2Governance_SetupAdaptor.toJSON(message.setupAdaptor);
    }
    if (message.setRebalanceDeviation !== undefined) {
      obj.setRebalanceDeviation = CellarV2Governance_SetRebalanceDeviation.toJSON(message.setRebalanceDeviation);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV2Governance>, I>>(base?: I): CellarV2Governance {
    return CellarV2Governance.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV2Governance>, I>>(object: I): CellarV2Governance {
    const message = createBaseCellarV2Governance();
    message.initiateShutdown = (object.initiateShutdown !== undefined && object.initiateShutdown !== null)
      ? CellarV2Governance_InitiateShutdown.fromPartial(object.initiateShutdown)
      : undefined;
    message.liftShutdown = (object.liftShutdown !== undefined && object.liftShutdown !== null)
      ? CellarV2Governance_LiftShutdown.fromPartial(object.liftShutdown)
      : undefined;
    message.setPlatformFee = (object.setPlatformFee !== undefined && object.setPlatformFee !== null)
      ? CellarV2Governance_SetPlatformFee.fromPartial(object.setPlatformFee)
      : undefined;
    message.setStrategistPlatformCut =
      (object.setStrategistPlatformCut !== undefined && object.setStrategistPlatformCut !== null)
        ? CellarV2Governance_SetStrategistPlatformCut.fromPartial(object.setStrategistPlatformCut)
        : undefined;
    message.setupAdaptor = (object.setupAdaptor !== undefined && object.setupAdaptor !== null)
      ? CellarV2Governance_SetupAdaptor.fromPartial(object.setupAdaptor)
      : undefined;
    message.setRebalanceDeviation =
      (object.setRebalanceDeviation !== undefined && object.setRebalanceDeviation !== null)
        ? CellarV2Governance_SetRebalanceDeviation.fromPartial(object.setRebalanceDeviation)
        : undefined;
    return message;
  },
};

function createBaseCellarV2Governance_InitiateShutdown(): CellarV2Governance_InitiateShutdown {
  return {};
}

export const CellarV2Governance_InitiateShutdown = {
  encode(_: CellarV2Governance_InitiateShutdown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV2Governance_InitiateShutdown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV2Governance_InitiateShutdown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): CellarV2Governance_InitiateShutdown {
    return {};
  },

  toJSON(_: CellarV2Governance_InitiateShutdown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV2Governance_InitiateShutdown>, I>>(
    base?: I,
  ): CellarV2Governance_InitiateShutdown {
    return CellarV2Governance_InitiateShutdown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV2Governance_InitiateShutdown>, I>>(
    _: I,
  ): CellarV2Governance_InitiateShutdown {
    const message = createBaseCellarV2Governance_InitiateShutdown();
    return message;
  },
};

function createBaseCellarV2Governance_LiftShutdown(): CellarV2Governance_LiftShutdown {
  return {};
}

export const CellarV2Governance_LiftShutdown = {
  encode(_: CellarV2Governance_LiftShutdown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV2Governance_LiftShutdown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV2Governance_LiftShutdown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): CellarV2Governance_LiftShutdown {
    return {};
  },

  toJSON(_: CellarV2Governance_LiftShutdown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV2Governance_LiftShutdown>, I>>(base?: I): CellarV2Governance_LiftShutdown {
    return CellarV2Governance_LiftShutdown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV2Governance_LiftShutdown>, I>>(_: I): CellarV2Governance_LiftShutdown {
    const message = createBaseCellarV2Governance_LiftShutdown();
    return message;
  },
};

function createBaseCellarV2Governance_SetPlatformFee(): CellarV2Governance_SetPlatformFee {
  return { amount: 0 };
}

export const CellarV2Governance_SetPlatformFee = {
  encode(message: CellarV2Governance_SetPlatformFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== 0) {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV2Governance_SetPlatformFee {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV2Governance_SetPlatformFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.amount = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV2Governance_SetPlatformFee {
    return { amount: isSet(object.amount) ? globalThis.Number(object.amount) : 0 };
  },

  toJSON(message: CellarV2Governance_SetPlatformFee): unknown {
    const obj: any = {};
    if (message.amount !== 0) {
      obj.amount = Math.round(message.amount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV2Governance_SetPlatformFee>, I>>(
    base?: I,
  ): CellarV2Governance_SetPlatformFee {
    return CellarV2Governance_SetPlatformFee.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV2Governance_SetPlatformFee>, I>>(
    object: I,
  ): CellarV2Governance_SetPlatformFee {
    const message = createBaseCellarV2Governance_SetPlatformFee();
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseCellarV2Governance_SetStrategistPlatformCut(): CellarV2Governance_SetStrategistPlatformCut {
  return { amount: 0 };
}

export const CellarV2Governance_SetStrategistPlatformCut = {
  encode(message: CellarV2Governance_SetStrategistPlatformCut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== 0) {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV2Governance_SetStrategistPlatformCut {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV2Governance_SetStrategistPlatformCut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.amount = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV2Governance_SetStrategistPlatformCut {
    return { amount: isSet(object.amount) ? globalThis.Number(object.amount) : 0 };
  },

  toJSON(message: CellarV2Governance_SetStrategistPlatformCut): unknown {
    const obj: any = {};
    if (message.amount !== 0) {
      obj.amount = Math.round(message.amount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV2Governance_SetStrategistPlatformCut>, I>>(
    base?: I,
  ): CellarV2Governance_SetStrategistPlatformCut {
    return CellarV2Governance_SetStrategistPlatformCut.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV2Governance_SetStrategistPlatformCut>, I>>(
    object: I,
  ): CellarV2Governance_SetStrategistPlatformCut {
    const message = createBaseCellarV2Governance_SetStrategistPlatformCut();
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseCellarV2Governance_SetupAdaptor(): CellarV2Governance_SetupAdaptor {
  return { adaptor: "" };
}

export const CellarV2Governance_SetupAdaptor = {
  encode(message: CellarV2Governance_SetupAdaptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.adaptor !== "") {
      writer.uint32(10).string(message.adaptor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV2Governance_SetupAdaptor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV2Governance_SetupAdaptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.adaptor = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV2Governance_SetupAdaptor {
    return { adaptor: isSet(object.adaptor) ? globalThis.String(object.adaptor) : "" };
  },

  toJSON(message: CellarV2Governance_SetupAdaptor): unknown {
    const obj: any = {};
    if (message.adaptor !== "") {
      obj.adaptor = message.adaptor;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV2Governance_SetupAdaptor>, I>>(base?: I): CellarV2Governance_SetupAdaptor {
    return CellarV2Governance_SetupAdaptor.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV2Governance_SetupAdaptor>, I>>(
    object: I,
  ): CellarV2Governance_SetupAdaptor {
    const message = createBaseCellarV2Governance_SetupAdaptor();
    message.adaptor = object.adaptor ?? "";
    return message;
  },
};

function createBaseCellarV2Governance_SetRebalanceDeviation(): CellarV2Governance_SetRebalanceDeviation {
  return { newDeviation: "" };
}

export const CellarV2Governance_SetRebalanceDeviation = {
  encode(message: CellarV2Governance_SetRebalanceDeviation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newDeviation !== "") {
      writer.uint32(10).string(message.newDeviation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV2Governance_SetRebalanceDeviation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV2Governance_SetRebalanceDeviation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.newDeviation = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV2Governance_SetRebalanceDeviation {
    return { newDeviation: isSet(object.newDeviation) ? globalThis.String(object.newDeviation) : "" };
  },

  toJSON(message: CellarV2Governance_SetRebalanceDeviation): unknown {
    const obj: any = {};
    if (message.newDeviation !== "") {
      obj.newDeviation = message.newDeviation;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV2Governance_SetRebalanceDeviation>, I>>(
    base?: I,
  ): CellarV2Governance_SetRebalanceDeviation {
    return CellarV2Governance_SetRebalanceDeviation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV2Governance_SetRebalanceDeviation>, I>>(
    object: I,
  ): CellarV2Governance_SetRebalanceDeviation {
    const message = createBaseCellarV2Governance_SetRebalanceDeviation();
    message.newDeviation = object.newDeviation ?? "";
    return message;
  },
};

function createBaseCellarV22(): CellarV22 {
  return { functionCall: undefined, multicall: undefined };
}

export const CellarV22 = {
  encode(message: CellarV22, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionCall !== undefined) {
      CellarV22_FunctionCall.encode(message.functionCall, writer.uint32(10).fork()).ldelim();
    }
    if (message.multicall !== undefined) {
      CellarV22_Multicall.encode(message.multicall, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functionCall = CellarV22_FunctionCall.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.multicall = CellarV22_Multicall.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV22 {
    return {
      functionCall: isSet(object.functionCall) ? CellarV22_FunctionCall.fromJSON(object.functionCall) : undefined,
      multicall: isSet(object.multicall) ? CellarV22_Multicall.fromJSON(object.multicall) : undefined,
    };
  },

  toJSON(message: CellarV22): unknown {
    const obj: any = {};
    if (message.functionCall !== undefined) {
      obj.functionCall = CellarV22_FunctionCall.toJSON(message.functionCall);
    }
    if (message.multicall !== undefined) {
      obj.multicall = CellarV22_Multicall.toJSON(message.multicall);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22>, I>>(base?: I): CellarV22 {
    return CellarV22.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22>, I>>(object: I): CellarV22 {
    const message = createBaseCellarV22();
    message.functionCall = (object.functionCall !== undefined && object.functionCall !== null)
      ? CellarV22_FunctionCall.fromPartial(object.functionCall)
      : undefined;
    message.multicall = (object.multicall !== undefined && object.multicall !== null)
      ? CellarV22_Multicall.fromPartial(object.multicall)
      : undefined;
    return message;
  },
};

function createBaseCellarV22_FunctionCall(): CellarV22_FunctionCall {
  return {
    addPosition: undefined,
    callOnAdaptor: undefined,
    removePosition: undefined,
    removeAdaptorFromCatalogue: undefined,
    removePositionFromCatalogue: undefined,
    setHoldingPosition: undefined,
    setStrategistPayoutAddress: undefined,
    swapPositions: undefined,
    addAdaptorToCatalogue: undefined,
    addPositionToCatalogue: undefined,
    setRebalanceDeviation: undefined,
    setShareLockPeriod: undefined,
    setStrategistPlatformCut: undefined,
    initiateShutdown: undefined,
    liftShutdown: undefined,
    cachePriceRouter: undefined,
  };
}

export const CellarV22_FunctionCall = {
  encode(message: CellarV22_FunctionCall, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addPosition !== undefined) {
      CellarV22_AddPosition.encode(message.addPosition, writer.uint32(10).fork()).ldelim();
    }
    if (message.callOnAdaptor !== undefined) {
      CellarV22_CallOnAdaptor.encode(message.callOnAdaptor, writer.uint32(18).fork()).ldelim();
    }
    if (message.removePosition !== undefined) {
      CellarV22_RemovePosition.encode(message.removePosition, writer.uint32(26).fork()).ldelim();
    }
    if (message.removeAdaptorFromCatalogue !== undefined) {
      CellarV22_RemoveAdaptorFromCatalogue.encode(message.removeAdaptorFromCatalogue, writer.uint32(34).fork())
        .ldelim();
    }
    if (message.removePositionFromCatalogue !== undefined) {
      CellarV22_RemovePositionFromCatalogue.encode(message.removePositionFromCatalogue, writer.uint32(42).fork())
        .ldelim();
    }
    if (message.setHoldingPosition !== undefined) {
      CellarV22_SetHoldingPosition.encode(message.setHoldingPosition, writer.uint32(50).fork()).ldelim();
    }
    if (message.setStrategistPayoutAddress !== undefined) {
      CellarV22_SetStrategistPayoutAddress.encode(message.setStrategistPayoutAddress, writer.uint32(58).fork())
        .ldelim();
    }
    if (message.swapPositions !== undefined) {
      CellarV22_SwapPositions.encode(message.swapPositions, writer.uint32(66).fork()).ldelim();
    }
    if (message.addAdaptorToCatalogue !== undefined) {
      CellarV22_AddAdaptorToCatalogue.encode(message.addAdaptorToCatalogue, writer.uint32(74).fork()).ldelim();
    }
    if (message.addPositionToCatalogue !== undefined) {
      CellarV22_AddPositionToCatalogue.encode(message.addPositionToCatalogue, writer.uint32(82).fork()).ldelim();
    }
    if (message.setRebalanceDeviation !== undefined) {
      CellarV22_SetRebalanceDeviation.encode(message.setRebalanceDeviation, writer.uint32(90).fork()).ldelim();
    }
    if (message.setShareLockPeriod !== undefined) {
      CellarV22_SetShareLockPeriod.encode(message.setShareLockPeriod, writer.uint32(98).fork()).ldelim();
    }
    if (message.setStrategistPlatformCut !== undefined) {
      CellarV22_SetStrategistPlatformCut.encode(message.setStrategistPlatformCut, writer.uint32(106).fork()).ldelim();
    }
    if (message.initiateShutdown !== undefined) {
      CellarV22_InitiateShutdown.encode(message.initiateShutdown, writer.uint32(114).fork()).ldelim();
    }
    if (message.liftShutdown !== undefined) {
      CellarV22_LiftShutdown.encode(message.liftShutdown, writer.uint32(122).fork()).ldelim();
    }
    if (message.cachePriceRouter !== undefined) {
      CellarV22_CachePriceRouter.encode(message.cachePriceRouter, writer.uint32(130).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22_FunctionCall {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22_FunctionCall();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.addPosition = CellarV22_AddPosition.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.callOnAdaptor = CellarV22_CallOnAdaptor.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.removePosition = CellarV22_RemovePosition.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.removeAdaptorFromCatalogue = CellarV22_RemoveAdaptorFromCatalogue.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.removePositionFromCatalogue = CellarV22_RemovePositionFromCatalogue.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.setHoldingPosition = CellarV22_SetHoldingPosition.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.setStrategistPayoutAddress = CellarV22_SetStrategistPayoutAddress.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.swapPositions = CellarV22_SwapPositions.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.addAdaptorToCatalogue = CellarV22_AddAdaptorToCatalogue.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.addPositionToCatalogue = CellarV22_AddPositionToCatalogue.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.setRebalanceDeviation = CellarV22_SetRebalanceDeviation.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.setShareLockPeriod = CellarV22_SetShareLockPeriod.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.setStrategistPlatformCut = CellarV22_SetStrategistPlatformCut.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.initiateShutdown = CellarV22_InitiateShutdown.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.liftShutdown = CellarV22_LiftShutdown.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.cachePriceRouter = CellarV22_CachePriceRouter.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV22_FunctionCall {
    return {
      addPosition: isSet(object.addPosition) ? CellarV22_AddPosition.fromJSON(object.addPosition) : undefined,
      callOnAdaptor: isSet(object.callOnAdaptor) ? CellarV22_CallOnAdaptor.fromJSON(object.callOnAdaptor) : undefined,
      removePosition: isSet(object.removePosition)
        ? CellarV22_RemovePosition.fromJSON(object.removePosition)
        : undefined,
      removeAdaptorFromCatalogue: isSet(object.removeAdaptorFromCatalogue)
        ? CellarV22_RemoveAdaptorFromCatalogue.fromJSON(object.removeAdaptorFromCatalogue)
        : undefined,
      removePositionFromCatalogue: isSet(object.removePositionFromCatalogue)
        ? CellarV22_RemovePositionFromCatalogue.fromJSON(object.removePositionFromCatalogue)
        : undefined,
      setHoldingPosition: isSet(object.setHoldingPosition)
        ? CellarV22_SetHoldingPosition.fromJSON(object.setHoldingPosition)
        : undefined,
      setStrategistPayoutAddress: isSet(object.setStrategistPayoutAddress)
        ? CellarV22_SetStrategistPayoutAddress.fromJSON(object.setStrategistPayoutAddress)
        : undefined,
      swapPositions: isSet(object.swapPositions) ? CellarV22_SwapPositions.fromJSON(object.swapPositions) : undefined,
      addAdaptorToCatalogue: isSet(object.addAdaptorToCatalogue)
        ? CellarV22_AddAdaptorToCatalogue.fromJSON(object.addAdaptorToCatalogue)
        : undefined,
      addPositionToCatalogue: isSet(object.addPositionToCatalogue)
        ? CellarV22_AddPositionToCatalogue.fromJSON(object.addPositionToCatalogue)
        : undefined,
      setRebalanceDeviation: isSet(object.setRebalanceDeviation)
        ? CellarV22_SetRebalanceDeviation.fromJSON(object.setRebalanceDeviation)
        : undefined,
      setShareLockPeriod: isSet(object.setShareLockPeriod)
        ? CellarV22_SetShareLockPeriod.fromJSON(object.setShareLockPeriod)
        : undefined,
      setStrategistPlatformCut: isSet(object.setStrategistPlatformCut)
        ? CellarV22_SetStrategistPlatformCut.fromJSON(object.setStrategistPlatformCut)
        : undefined,
      initiateShutdown: isSet(object.initiateShutdown)
        ? CellarV22_InitiateShutdown.fromJSON(object.initiateShutdown)
        : undefined,
      liftShutdown: isSet(object.liftShutdown) ? CellarV22_LiftShutdown.fromJSON(object.liftShutdown) : undefined,
      cachePriceRouter: isSet(object.cachePriceRouter)
        ? CellarV22_CachePriceRouter.fromJSON(object.cachePriceRouter)
        : undefined,
    };
  },

  toJSON(message: CellarV22_FunctionCall): unknown {
    const obj: any = {};
    if (message.addPosition !== undefined) {
      obj.addPosition = CellarV22_AddPosition.toJSON(message.addPosition);
    }
    if (message.callOnAdaptor !== undefined) {
      obj.callOnAdaptor = CellarV22_CallOnAdaptor.toJSON(message.callOnAdaptor);
    }
    if (message.removePosition !== undefined) {
      obj.removePosition = CellarV22_RemovePosition.toJSON(message.removePosition);
    }
    if (message.removeAdaptorFromCatalogue !== undefined) {
      obj.removeAdaptorFromCatalogue = CellarV22_RemoveAdaptorFromCatalogue.toJSON(message.removeAdaptorFromCatalogue);
    }
    if (message.removePositionFromCatalogue !== undefined) {
      obj.removePositionFromCatalogue = CellarV22_RemovePositionFromCatalogue.toJSON(
        message.removePositionFromCatalogue,
      );
    }
    if (message.setHoldingPosition !== undefined) {
      obj.setHoldingPosition = CellarV22_SetHoldingPosition.toJSON(message.setHoldingPosition);
    }
    if (message.setStrategistPayoutAddress !== undefined) {
      obj.setStrategistPayoutAddress = CellarV22_SetStrategistPayoutAddress.toJSON(message.setStrategistPayoutAddress);
    }
    if (message.swapPositions !== undefined) {
      obj.swapPositions = CellarV22_SwapPositions.toJSON(message.swapPositions);
    }
    if (message.addAdaptorToCatalogue !== undefined) {
      obj.addAdaptorToCatalogue = CellarV22_AddAdaptorToCatalogue.toJSON(message.addAdaptorToCatalogue);
    }
    if (message.addPositionToCatalogue !== undefined) {
      obj.addPositionToCatalogue = CellarV22_AddPositionToCatalogue.toJSON(message.addPositionToCatalogue);
    }
    if (message.setRebalanceDeviation !== undefined) {
      obj.setRebalanceDeviation = CellarV22_SetRebalanceDeviation.toJSON(message.setRebalanceDeviation);
    }
    if (message.setShareLockPeriod !== undefined) {
      obj.setShareLockPeriod = CellarV22_SetShareLockPeriod.toJSON(message.setShareLockPeriod);
    }
    if (message.setStrategistPlatformCut !== undefined) {
      obj.setStrategistPlatformCut = CellarV22_SetStrategistPlatformCut.toJSON(message.setStrategistPlatformCut);
    }
    if (message.initiateShutdown !== undefined) {
      obj.initiateShutdown = CellarV22_InitiateShutdown.toJSON(message.initiateShutdown);
    }
    if (message.liftShutdown !== undefined) {
      obj.liftShutdown = CellarV22_LiftShutdown.toJSON(message.liftShutdown);
    }
    if (message.cachePriceRouter !== undefined) {
      obj.cachePriceRouter = CellarV22_CachePriceRouter.toJSON(message.cachePriceRouter);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22_FunctionCall>, I>>(base?: I): CellarV22_FunctionCall {
    return CellarV22_FunctionCall.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22_FunctionCall>, I>>(object: I): CellarV22_FunctionCall {
    const message = createBaseCellarV22_FunctionCall();
    message.addPosition = (object.addPosition !== undefined && object.addPosition !== null)
      ? CellarV22_AddPosition.fromPartial(object.addPosition)
      : undefined;
    message.callOnAdaptor = (object.callOnAdaptor !== undefined && object.callOnAdaptor !== null)
      ? CellarV22_CallOnAdaptor.fromPartial(object.callOnAdaptor)
      : undefined;
    message.removePosition = (object.removePosition !== undefined && object.removePosition !== null)
      ? CellarV22_RemovePosition.fromPartial(object.removePosition)
      : undefined;
    message.removeAdaptorFromCatalogue =
      (object.removeAdaptorFromCatalogue !== undefined && object.removeAdaptorFromCatalogue !== null)
        ? CellarV22_RemoveAdaptorFromCatalogue.fromPartial(object.removeAdaptorFromCatalogue)
        : undefined;
    message.removePositionFromCatalogue =
      (object.removePositionFromCatalogue !== undefined && object.removePositionFromCatalogue !== null)
        ? CellarV22_RemovePositionFromCatalogue.fromPartial(object.removePositionFromCatalogue)
        : undefined;
    message.setHoldingPosition = (object.setHoldingPosition !== undefined && object.setHoldingPosition !== null)
      ? CellarV22_SetHoldingPosition.fromPartial(object.setHoldingPosition)
      : undefined;
    message.setStrategistPayoutAddress =
      (object.setStrategistPayoutAddress !== undefined && object.setStrategistPayoutAddress !== null)
        ? CellarV22_SetStrategistPayoutAddress.fromPartial(object.setStrategistPayoutAddress)
        : undefined;
    message.swapPositions = (object.swapPositions !== undefined && object.swapPositions !== null)
      ? CellarV22_SwapPositions.fromPartial(object.swapPositions)
      : undefined;
    message.addAdaptorToCatalogue =
      (object.addAdaptorToCatalogue !== undefined && object.addAdaptorToCatalogue !== null)
        ? CellarV22_AddAdaptorToCatalogue.fromPartial(object.addAdaptorToCatalogue)
        : undefined;
    message.addPositionToCatalogue =
      (object.addPositionToCatalogue !== undefined && object.addPositionToCatalogue !== null)
        ? CellarV22_AddPositionToCatalogue.fromPartial(object.addPositionToCatalogue)
        : undefined;
    message.setRebalanceDeviation =
      (object.setRebalanceDeviation !== undefined && object.setRebalanceDeviation !== null)
        ? CellarV22_SetRebalanceDeviation.fromPartial(object.setRebalanceDeviation)
        : undefined;
    message.setShareLockPeriod = (object.setShareLockPeriod !== undefined && object.setShareLockPeriod !== null)
      ? CellarV22_SetShareLockPeriod.fromPartial(object.setShareLockPeriod)
      : undefined;
    message.setStrategistPlatformCut =
      (object.setStrategistPlatformCut !== undefined && object.setStrategistPlatformCut !== null)
        ? CellarV22_SetStrategistPlatformCut.fromPartial(object.setStrategistPlatformCut)
        : undefined;
    message.initiateShutdown = (object.initiateShutdown !== undefined && object.initiateShutdown !== null)
      ? CellarV22_InitiateShutdown.fromPartial(object.initiateShutdown)
      : undefined;
    message.liftShutdown = (object.liftShutdown !== undefined && object.liftShutdown !== null)
      ? CellarV22_LiftShutdown.fromPartial(object.liftShutdown)
      : undefined;
    message.cachePriceRouter = (object.cachePriceRouter !== undefined && object.cachePriceRouter !== null)
      ? CellarV22_CachePriceRouter.fromPartial(object.cachePriceRouter)
      : undefined;
    return message;
  },
};

function createBaseCellarV22_AddPosition(): CellarV22_AddPosition {
  return { index: 0, positionId: 0, configurationData: new Uint8Array(0), inDebtArray: false };
}

export const CellarV22_AddPosition = {
  encode(message: CellarV22_AddPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.positionId !== 0) {
      writer.uint32(16).uint32(message.positionId);
    }
    if (message.configurationData.length !== 0) {
      writer.uint32(26).bytes(message.configurationData);
    }
    if (message.inDebtArray === true) {
      writer.uint32(32).bool(message.inDebtArray);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22_AddPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22_AddPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.index = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.positionId = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.configurationData = reader.bytes();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.inDebtArray = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV22_AddPosition {
    return {
      index: isSet(object.index) ? globalThis.Number(object.index) : 0,
      positionId: isSet(object.positionId) ? globalThis.Number(object.positionId) : 0,
      configurationData: isSet(object.configurationData)
        ? bytesFromBase64(object.configurationData)
        : new Uint8Array(0),
      inDebtArray: isSet(object.inDebtArray) ? globalThis.Boolean(object.inDebtArray) : false,
    };
  },

  toJSON(message: CellarV22_AddPosition): unknown {
    const obj: any = {};
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    if (message.positionId !== 0) {
      obj.positionId = Math.round(message.positionId);
    }
    if (message.configurationData.length !== 0) {
      obj.configurationData = base64FromBytes(message.configurationData);
    }
    if (message.inDebtArray === true) {
      obj.inDebtArray = message.inDebtArray;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22_AddPosition>, I>>(base?: I): CellarV22_AddPosition {
    return CellarV22_AddPosition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22_AddPosition>, I>>(object: I): CellarV22_AddPosition {
    const message = createBaseCellarV22_AddPosition();
    message.index = object.index ?? 0;
    message.positionId = object.positionId ?? 0;
    message.configurationData = object.configurationData ?? new Uint8Array(0);
    message.inDebtArray = object.inDebtArray ?? false;
    return message;
  },
};

function createBaseCellarV22_CallOnAdaptor(): CellarV22_CallOnAdaptor {
  return { data: [] };
}

export const CellarV22_CallOnAdaptor = {
  encode(message: CellarV22_CallOnAdaptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.data) {
      AdaptorCall.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22_CallOnAdaptor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22_CallOnAdaptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data.push(AdaptorCall.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV22_CallOnAdaptor {
    return { data: globalThis.Array.isArray(object?.data) ? object.data.map((e: any) => AdaptorCall.fromJSON(e)) : [] };
  },

  toJSON(message: CellarV22_CallOnAdaptor): unknown {
    const obj: any = {};
    if (message.data?.length) {
      obj.data = message.data.map((e) => AdaptorCall.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22_CallOnAdaptor>, I>>(base?: I): CellarV22_CallOnAdaptor {
    return CellarV22_CallOnAdaptor.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22_CallOnAdaptor>, I>>(object: I): CellarV22_CallOnAdaptor {
    const message = createBaseCellarV22_CallOnAdaptor();
    message.data = object.data?.map((e) => AdaptorCall.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCellarV22_RemovePosition(): CellarV22_RemovePosition {
  return { index: 0, inDebtArray: false };
}

export const CellarV22_RemovePosition = {
  encode(message: CellarV22_RemovePosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.inDebtArray === true) {
      writer.uint32(16).bool(message.inDebtArray);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22_RemovePosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22_RemovePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.index = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.inDebtArray = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV22_RemovePosition {
    return {
      index: isSet(object.index) ? globalThis.Number(object.index) : 0,
      inDebtArray: isSet(object.inDebtArray) ? globalThis.Boolean(object.inDebtArray) : false,
    };
  },

  toJSON(message: CellarV22_RemovePosition): unknown {
    const obj: any = {};
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    if (message.inDebtArray === true) {
      obj.inDebtArray = message.inDebtArray;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22_RemovePosition>, I>>(base?: I): CellarV22_RemovePosition {
    return CellarV22_RemovePosition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22_RemovePosition>, I>>(object: I): CellarV22_RemovePosition {
    const message = createBaseCellarV22_RemovePosition();
    message.index = object.index ?? 0;
    message.inDebtArray = object.inDebtArray ?? false;
    return message;
  },
};

function createBaseCellarV22_RemoveAdaptorFromCatalogue(): CellarV22_RemoveAdaptorFromCatalogue {
  return { adaptor: "" };
}

export const CellarV22_RemoveAdaptorFromCatalogue = {
  encode(message: CellarV22_RemoveAdaptorFromCatalogue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.adaptor !== "") {
      writer.uint32(10).string(message.adaptor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22_RemoveAdaptorFromCatalogue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22_RemoveAdaptorFromCatalogue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.adaptor = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV22_RemoveAdaptorFromCatalogue {
    return { adaptor: isSet(object.adaptor) ? globalThis.String(object.adaptor) : "" };
  },

  toJSON(message: CellarV22_RemoveAdaptorFromCatalogue): unknown {
    const obj: any = {};
    if (message.adaptor !== "") {
      obj.adaptor = message.adaptor;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22_RemoveAdaptorFromCatalogue>, I>>(
    base?: I,
  ): CellarV22_RemoveAdaptorFromCatalogue {
    return CellarV22_RemoveAdaptorFromCatalogue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22_RemoveAdaptorFromCatalogue>, I>>(
    object: I,
  ): CellarV22_RemoveAdaptorFromCatalogue {
    const message = createBaseCellarV22_RemoveAdaptorFromCatalogue();
    message.adaptor = object.adaptor ?? "";
    return message;
  },
};

function createBaseCellarV22_RemovePositionFromCatalogue(): CellarV22_RemovePositionFromCatalogue {
  return { positionId: 0 };
}

export const CellarV22_RemovePositionFromCatalogue = {
  encode(message: CellarV22_RemovePositionFromCatalogue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.positionId !== 0) {
      writer.uint32(8).uint32(message.positionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22_RemovePositionFromCatalogue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22_RemovePositionFromCatalogue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.positionId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV22_RemovePositionFromCatalogue {
    return { positionId: isSet(object.positionId) ? globalThis.Number(object.positionId) : 0 };
  },

  toJSON(message: CellarV22_RemovePositionFromCatalogue): unknown {
    const obj: any = {};
    if (message.positionId !== 0) {
      obj.positionId = Math.round(message.positionId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22_RemovePositionFromCatalogue>, I>>(
    base?: I,
  ): CellarV22_RemovePositionFromCatalogue {
    return CellarV22_RemovePositionFromCatalogue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22_RemovePositionFromCatalogue>, I>>(
    object: I,
  ): CellarV22_RemovePositionFromCatalogue {
    const message = createBaseCellarV22_RemovePositionFromCatalogue();
    message.positionId = object.positionId ?? 0;
    return message;
  },
};

function createBaseCellarV22_SetHoldingPosition(): CellarV22_SetHoldingPosition {
  return { positionId: 0 };
}

export const CellarV22_SetHoldingPosition = {
  encode(message: CellarV22_SetHoldingPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.positionId !== 0) {
      writer.uint32(8).uint32(message.positionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22_SetHoldingPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22_SetHoldingPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.positionId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV22_SetHoldingPosition {
    return { positionId: isSet(object.positionId) ? globalThis.Number(object.positionId) : 0 };
  },

  toJSON(message: CellarV22_SetHoldingPosition): unknown {
    const obj: any = {};
    if (message.positionId !== 0) {
      obj.positionId = Math.round(message.positionId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22_SetHoldingPosition>, I>>(base?: I): CellarV22_SetHoldingPosition {
    return CellarV22_SetHoldingPosition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22_SetHoldingPosition>, I>>(object: I): CellarV22_SetHoldingPosition {
    const message = createBaseCellarV22_SetHoldingPosition();
    message.positionId = object.positionId ?? 0;
    return message;
  },
};

function createBaseCellarV22_SetStrategistPayoutAddress(): CellarV22_SetStrategistPayoutAddress {
  return { payout: "" };
}

export const CellarV22_SetStrategistPayoutAddress = {
  encode(message: CellarV22_SetStrategistPayoutAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payout !== "") {
      writer.uint32(10).string(message.payout);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22_SetStrategistPayoutAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22_SetStrategistPayoutAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payout = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV22_SetStrategistPayoutAddress {
    return { payout: isSet(object.payout) ? globalThis.String(object.payout) : "" };
  },

  toJSON(message: CellarV22_SetStrategistPayoutAddress): unknown {
    const obj: any = {};
    if (message.payout !== "") {
      obj.payout = message.payout;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22_SetStrategistPayoutAddress>, I>>(
    base?: I,
  ): CellarV22_SetStrategistPayoutAddress {
    return CellarV22_SetStrategistPayoutAddress.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22_SetStrategistPayoutAddress>, I>>(
    object: I,
  ): CellarV22_SetStrategistPayoutAddress {
    const message = createBaseCellarV22_SetStrategistPayoutAddress();
    message.payout = object.payout ?? "";
    return message;
  },
};

function createBaseCellarV22_SwapPositions(): CellarV22_SwapPositions {
  return { index1: 0, index2: 0, inDebtArray: false };
}

export const CellarV22_SwapPositions = {
  encode(message: CellarV22_SwapPositions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index1 !== 0) {
      writer.uint32(8).uint32(message.index1);
    }
    if (message.index2 !== 0) {
      writer.uint32(16).uint32(message.index2);
    }
    if (message.inDebtArray === true) {
      writer.uint32(24).bool(message.inDebtArray);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22_SwapPositions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22_SwapPositions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.index1 = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.index2 = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.inDebtArray = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV22_SwapPositions {
    return {
      index1: isSet(object.index1) ? globalThis.Number(object.index1) : 0,
      index2: isSet(object.index2) ? globalThis.Number(object.index2) : 0,
      inDebtArray: isSet(object.inDebtArray) ? globalThis.Boolean(object.inDebtArray) : false,
    };
  },

  toJSON(message: CellarV22_SwapPositions): unknown {
    const obj: any = {};
    if (message.index1 !== 0) {
      obj.index1 = Math.round(message.index1);
    }
    if (message.index2 !== 0) {
      obj.index2 = Math.round(message.index2);
    }
    if (message.inDebtArray === true) {
      obj.inDebtArray = message.inDebtArray;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22_SwapPositions>, I>>(base?: I): CellarV22_SwapPositions {
    return CellarV22_SwapPositions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22_SwapPositions>, I>>(object: I): CellarV22_SwapPositions {
    const message = createBaseCellarV22_SwapPositions();
    message.index1 = object.index1 ?? 0;
    message.index2 = object.index2 ?? 0;
    message.inDebtArray = object.inDebtArray ?? false;
    return message;
  },
};

function createBaseCellarV22_Multicall(): CellarV22_Multicall {
  return { functionCalls: [] };
}

export const CellarV22_Multicall = {
  encode(message: CellarV22_Multicall, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.functionCalls) {
      CellarV22_FunctionCall.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22_Multicall {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22_Multicall();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functionCalls.push(CellarV22_FunctionCall.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV22_Multicall {
    return {
      functionCalls: globalThis.Array.isArray(object?.functionCalls)
        ? object.functionCalls.map((e: any) => CellarV22_FunctionCall.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CellarV22_Multicall): unknown {
    const obj: any = {};
    if (message.functionCalls?.length) {
      obj.functionCalls = message.functionCalls.map((e) => CellarV22_FunctionCall.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22_Multicall>, I>>(base?: I): CellarV22_Multicall {
    return CellarV22_Multicall.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22_Multicall>, I>>(object: I): CellarV22_Multicall {
    const message = createBaseCellarV22_Multicall();
    message.functionCalls = object.functionCalls?.map((e) => CellarV22_FunctionCall.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCellarV22_AddAdaptorToCatalogue(): CellarV22_AddAdaptorToCatalogue {
  return { adaptor: "" };
}

export const CellarV22_AddAdaptorToCatalogue = {
  encode(message: CellarV22_AddAdaptorToCatalogue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.adaptor !== "") {
      writer.uint32(10).string(message.adaptor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22_AddAdaptorToCatalogue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22_AddAdaptorToCatalogue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.adaptor = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV22_AddAdaptorToCatalogue {
    return { adaptor: isSet(object.adaptor) ? globalThis.String(object.adaptor) : "" };
  },

  toJSON(message: CellarV22_AddAdaptorToCatalogue): unknown {
    const obj: any = {};
    if (message.adaptor !== "") {
      obj.adaptor = message.adaptor;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22_AddAdaptorToCatalogue>, I>>(base?: I): CellarV22_AddAdaptorToCatalogue {
    return CellarV22_AddAdaptorToCatalogue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22_AddAdaptorToCatalogue>, I>>(
    object: I,
  ): CellarV22_AddAdaptorToCatalogue {
    const message = createBaseCellarV22_AddAdaptorToCatalogue();
    message.adaptor = object.adaptor ?? "";
    return message;
  },
};

function createBaseCellarV22_AddPositionToCatalogue(): CellarV22_AddPositionToCatalogue {
  return { positionId: 0 };
}

export const CellarV22_AddPositionToCatalogue = {
  encode(message: CellarV22_AddPositionToCatalogue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.positionId !== 0) {
      writer.uint32(8).uint32(message.positionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22_AddPositionToCatalogue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22_AddPositionToCatalogue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.positionId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV22_AddPositionToCatalogue {
    return { positionId: isSet(object.positionId) ? globalThis.Number(object.positionId) : 0 };
  },

  toJSON(message: CellarV22_AddPositionToCatalogue): unknown {
    const obj: any = {};
    if (message.positionId !== 0) {
      obj.positionId = Math.round(message.positionId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22_AddPositionToCatalogue>, I>>(
    base?: I,
  ): CellarV22_AddPositionToCatalogue {
    return CellarV22_AddPositionToCatalogue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22_AddPositionToCatalogue>, I>>(
    object: I,
  ): CellarV22_AddPositionToCatalogue {
    const message = createBaseCellarV22_AddPositionToCatalogue();
    message.positionId = object.positionId ?? 0;
    return message;
  },
};

function createBaseCellarV22_SetShareLockPeriod(): CellarV22_SetShareLockPeriod {
  return { newLock: "" };
}

export const CellarV22_SetShareLockPeriod = {
  encode(message: CellarV22_SetShareLockPeriod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newLock !== "") {
      writer.uint32(10).string(message.newLock);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22_SetShareLockPeriod {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22_SetShareLockPeriod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.newLock = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV22_SetShareLockPeriod {
    return { newLock: isSet(object.newLock) ? globalThis.String(object.newLock) : "" };
  },

  toJSON(message: CellarV22_SetShareLockPeriod): unknown {
    const obj: any = {};
    if (message.newLock !== "") {
      obj.newLock = message.newLock;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22_SetShareLockPeriod>, I>>(base?: I): CellarV22_SetShareLockPeriod {
    return CellarV22_SetShareLockPeriod.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22_SetShareLockPeriod>, I>>(object: I): CellarV22_SetShareLockPeriod {
    const message = createBaseCellarV22_SetShareLockPeriod();
    message.newLock = object.newLock ?? "";
    return message;
  },
};

function createBaseCellarV22_SetRebalanceDeviation(): CellarV22_SetRebalanceDeviation {
  return { newDeviation: "" };
}

export const CellarV22_SetRebalanceDeviation = {
  encode(message: CellarV22_SetRebalanceDeviation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newDeviation !== "") {
      writer.uint32(10).string(message.newDeviation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22_SetRebalanceDeviation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22_SetRebalanceDeviation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.newDeviation = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV22_SetRebalanceDeviation {
    return { newDeviation: isSet(object.newDeviation) ? globalThis.String(object.newDeviation) : "" };
  },

  toJSON(message: CellarV22_SetRebalanceDeviation): unknown {
    const obj: any = {};
    if (message.newDeviation !== "") {
      obj.newDeviation = message.newDeviation;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22_SetRebalanceDeviation>, I>>(base?: I): CellarV22_SetRebalanceDeviation {
    return CellarV22_SetRebalanceDeviation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22_SetRebalanceDeviation>, I>>(
    object: I,
  ): CellarV22_SetRebalanceDeviation {
    const message = createBaseCellarV22_SetRebalanceDeviation();
    message.newDeviation = object.newDeviation ?? "";
    return message;
  },
};

function createBaseCellarV22_InitiateShutdown(): CellarV22_InitiateShutdown {
  return {};
}

export const CellarV22_InitiateShutdown = {
  encode(_: CellarV22_InitiateShutdown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22_InitiateShutdown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22_InitiateShutdown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): CellarV22_InitiateShutdown {
    return {};
  },

  toJSON(_: CellarV22_InitiateShutdown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22_InitiateShutdown>, I>>(base?: I): CellarV22_InitiateShutdown {
    return CellarV22_InitiateShutdown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22_InitiateShutdown>, I>>(_: I): CellarV22_InitiateShutdown {
    const message = createBaseCellarV22_InitiateShutdown();
    return message;
  },
};

function createBaseCellarV22_SetStrategistPlatformCut(): CellarV22_SetStrategistPlatformCut {
  return { newCut: 0 };
}

export const CellarV22_SetStrategistPlatformCut = {
  encode(message: CellarV22_SetStrategistPlatformCut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newCut !== 0) {
      writer.uint32(8).uint64(message.newCut);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22_SetStrategistPlatformCut {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22_SetStrategistPlatformCut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.newCut = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV22_SetStrategistPlatformCut {
    return { newCut: isSet(object.newCut) ? globalThis.Number(object.newCut) : 0 };
  },

  toJSON(message: CellarV22_SetStrategistPlatformCut): unknown {
    const obj: any = {};
    if (message.newCut !== 0) {
      obj.newCut = Math.round(message.newCut);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22_SetStrategistPlatformCut>, I>>(
    base?: I,
  ): CellarV22_SetStrategistPlatformCut {
    return CellarV22_SetStrategistPlatformCut.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22_SetStrategistPlatformCut>, I>>(
    object: I,
  ): CellarV22_SetStrategistPlatformCut {
    const message = createBaseCellarV22_SetStrategistPlatformCut();
    message.newCut = object.newCut ?? 0;
    return message;
  },
};

function createBaseCellarV22_LiftShutdown(): CellarV22_LiftShutdown {
  return {};
}

export const CellarV22_LiftShutdown = {
  encode(_: CellarV22_LiftShutdown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22_LiftShutdown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22_LiftShutdown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): CellarV22_LiftShutdown {
    return {};
  },

  toJSON(_: CellarV22_LiftShutdown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22_LiftShutdown>, I>>(base?: I): CellarV22_LiftShutdown {
    return CellarV22_LiftShutdown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22_LiftShutdown>, I>>(_: I): CellarV22_LiftShutdown {
    const message = createBaseCellarV22_LiftShutdown();
    return message;
  },
};

function createBaseCellarV22_CachePriceRouter(): CellarV22_CachePriceRouter {
  return { checkTotalAssets: false, allowableRange: 0, expectedPriceRouter: "" };
}

export const CellarV22_CachePriceRouter = {
  encode(message: CellarV22_CachePriceRouter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.checkTotalAssets === true) {
      writer.uint32(8).bool(message.checkTotalAssets);
    }
    if (message.allowableRange !== 0) {
      writer.uint32(16).uint32(message.allowableRange);
    }
    if (message.expectedPriceRouter !== "") {
      writer.uint32(26).string(message.expectedPriceRouter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22_CachePriceRouter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22_CachePriceRouter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.checkTotalAssets = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.allowableRange = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.expectedPriceRouter = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV22_CachePriceRouter {
    return {
      checkTotalAssets: isSet(object.checkTotalAssets) ? globalThis.Boolean(object.checkTotalAssets) : false,
      allowableRange: isSet(object.allowableRange) ? globalThis.Number(object.allowableRange) : 0,
      expectedPriceRouter: isSet(object.expectedPriceRouter) ? globalThis.String(object.expectedPriceRouter) : "",
    };
  },

  toJSON(message: CellarV22_CachePriceRouter): unknown {
    const obj: any = {};
    if (message.checkTotalAssets === true) {
      obj.checkTotalAssets = message.checkTotalAssets;
    }
    if (message.allowableRange !== 0) {
      obj.allowableRange = Math.round(message.allowableRange);
    }
    if (message.expectedPriceRouter !== "") {
      obj.expectedPriceRouter = message.expectedPriceRouter;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22_CachePriceRouter>, I>>(base?: I): CellarV22_CachePriceRouter {
    return CellarV22_CachePriceRouter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22_CachePriceRouter>, I>>(object: I): CellarV22_CachePriceRouter {
    const message = createBaseCellarV22_CachePriceRouter();
    message.checkTotalAssets = object.checkTotalAssets ?? false;
    message.allowableRange = object.allowableRange ?? 0;
    message.expectedPriceRouter = object.expectedPriceRouter ?? "";
    return message;
  },
};

function createBaseCellarV22Governance(): CellarV22Governance {
  return { functionCall: undefined, multicall: undefined };
}

export const CellarV22Governance = {
  encode(message: CellarV22Governance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionCall !== undefined) {
      CellarV22Governance_FunctionCall.encode(message.functionCall, writer.uint32(10).fork()).ldelim();
    }
    if (message.multicall !== undefined) {
      CellarV22Governance_Multicall.encode(message.multicall, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22Governance {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22Governance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functionCall = CellarV22Governance_FunctionCall.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.multicall = CellarV22Governance_Multicall.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV22Governance {
    return {
      functionCall: isSet(object.functionCall)
        ? CellarV22Governance_FunctionCall.fromJSON(object.functionCall)
        : undefined,
      multicall: isSet(object.multicall) ? CellarV22Governance_Multicall.fromJSON(object.multicall) : undefined,
    };
  },

  toJSON(message: CellarV22Governance): unknown {
    const obj: any = {};
    if (message.functionCall !== undefined) {
      obj.functionCall = CellarV22Governance_FunctionCall.toJSON(message.functionCall);
    }
    if (message.multicall !== undefined) {
      obj.multicall = CellarV22Governance_Multicall.toJSON(message.multicall);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22Governance>, I>>(base?: I): CellarV22Governance {
    return CellarV22Governance.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22Governance>, I>>(object: I): CellarV22Governance {
    const message = createBaseCellarV22Governance();
    message.functionCall = (object.functionCall !== undefined && object.functionCall !== null)
      ? CellarV22Governance_FunctionCall.fromPartial(object.functionCall)
      : undefined;
    message.multicall = (object.multicall !== undefined && object.multicall !== null)
      ? CellarV22Governance_Multicall.fromPartial(object.multicall)
      : undefined;
    return message;
  },
};

function createBaseCellarV22Governance_FunctionCall(): CellarV22Governance_FunctionCall {
  return {
    addAdaptorToCatalogue: undefined,
    addPositionToCatalogue: undefined,
    setRebalanceDeviation: undefined,
    setShareLockPeriod: undefined,
    setStrategistPlatformCut: undefined,
    initiateShutdown: undefined,
    liftShutdown: undefined,
    forcePositionOut: undefined,
    toggleIgnorePause: undefined,
    cachePriceRouter: undefined,
    addPosition: undefined,
    callOnAdaptor: undefined,
    removePosition: undefined,
    removeAdaptorFromCatalogue: undefined,
    removePositionFromCatalogue: undefined,
    setHoldingPosition: undefined,
    swapPositions: undefined,
  };
}

export const CellarV22Governance_FunctionCall = {
  encode(message: CellarV22Governance_FunctionCall, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addAdaptorToCatalogue !== undefined) {
      CellarV22Governance_AddAdaptorToCatalogue.encode(message.addAdaptorToCatalogue, writer.uint32(10).fork())
        .ldelim();
    }
    if (message.addPositionToCatalogue !== undefined) {
      CellarV22Governance_AddPositionToCatalogue.encode(message.addPositionToCatalogue, writer.uint32(18).fork())
        .ldelim();
    }
    if (message.setRebalanceDeviation !== undefined) {
      CellarV22Governance_SetRebalanceDeviation.encode(message.setRebalanceDeviation, writer.uint32(26).fork())
        .ldelim();
    }
    if (message.setShareLockPeriod !== undefined) {
      CellarV22Governance_SetShareLockPeriod.encode(message.setShareLockPeriod, writer.uint32(34).fork()).ldelim();
    }
    if (message.setStrategistPlatformCut !== undefined) {
      CellarV22Governance_SetStrategistPlatformCut.encode(message.setStrategistPlatformCut, writer.uint32(42).fork())
        .ldelim();
    }
    if (message.initiateShutdown !== undefined) {
      CellarV22Governance_InitiateShutdown.encode(message.initiateShutdown, writer.uint32(50).fork()).ldelim();
    }
    if (message.liftShutdown !== undefined) {
      CellarV22Governance_LiftShutdown.encode(message.liftShutdown, writer.uint32(58).fork()).ldelim();
    }
    if (message.forcePositionOut !== undefined) {
      CellarV22Governance_ForcePositionOut.encode(message.forcePositionOut, writer.uint32(66).fork()).ldelim();
    }
    if (message.toggleIgnorePause !== undefined) {
      CellarV22Governance_ToggleIgnorePause.encode(message.toggleIgnorePause, writer.uint32(74).fork()).ldelim();
    }
    if (message.cachePriceRouter !== undefined) {
      CellarV22Governance_CachePriceRouter.encode(message.cachePriceRouter, writer.uint32(82).fork()).ldelim();
    }
    if (message.addPosition !== undefined) {
      CellarV22Governance_AddPosition.encode(message.addPosition, writer.uint32(90).fork()).ldelim();
    }
    if (message.callOnAdaptor !== undefined) {
      CellarV22Governance_CallOnAdaptor.encode(message.callOnAdaptor, writer.uint32(98).fork()).ldelim();
    }
    if (message.removePosition !== undefined) {
      CellarV22Governance_RemovePosition.encode(message.removePosition, writer.uint32(106).fork()).ldelim();
    }
    if (message.removeAdaptorFromCatalogue !== undefined) {
      CellarV22Governance_RemoveAdaptorFromCatalogue.encode(
        message.removeAdaptorFromCatalogue,
        writer.uint32(114).fork(),
      ).ldelim();
    }
    if (message.removePositionFromCatalogue !== undefined) {
      CellarV22Governance_RemovePositionFromCatalogue.encode(
        message.removePositionFromCatalogue,
        writer.uint32(122).fork(),
      ).ldelim();
    }
    if (message.setHoldingPosition !== undefined) {
      CellarV22Governance_SetHoldingPosition.encode(message.setHoldingPosition, writer.uint32(130).fork()).ldelim();
    }
    if (message.swapPositions !== undefined) {
      CellarV22Governance_SwapPositions.encode(message.swapPositions, writer.uint32(146).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22Governance_FunctionCall {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22Governance_FunctionCall();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.addAdaptorToCatalogue = CellarV22Governance_AddAdaptorToCatalogue.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.addPositionToCatalogue = CellarV22Governance_AddPositionToCatalogue.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.setRebalanceDeviation = CellarV22Governance_SetRebalanceDeviation.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.setShareLockPeriod = CellarV22Governance_SetShareLockPeriod.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.setStrategistPlatformCut = CellarV22Governance_SetStrategistPlatformCut.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.initiateShutdown = CellarV22Governance_InitiateShutdown.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.liftShutdown = CellarV22Governance_LiftShutdown.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.forcePositionOut = CellarV22Governance_ForcePositionOut.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.toggleIgnorePause = CellarV22Governance_ToggleIgnorePause.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.cachePriceRouter = CellarV22Governance_CachePriceRouter.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.addPosition = CellarV22Governance_AddPosition.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.callOnAdaptor = CellarV22Governance_CallOnAdaptor.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.removePosition = CellarV22Governance_RemovePosition.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.removeAdaptorFromCatalogue = CellarV22Governance_RemoveAdaptorFromCatalogue.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.removePositionFromCatalogue = CellarV22Governance_RemovePositionFromCatalogue.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.setHoldingPosition = CellarV22Governance_SetHoldingPosition.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.swapPositions = CellarV22Governance_SwapPositions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV22Governance_FunctionCall {
    return {
      addAdaptorToCatalogue: isSet(object.addAdaptorToCatalogue)
        ? CellarV22Governance_AddAdaptorToCatalogue.fromJSON(object.addAdaptorToCatalogue)
        : undefined,
      addPositionToCatalogue: isSet(object.addPositionToCatalogue)
        ? CellarV22Governance_AddPositionToCatalogue.fromJSON(object.addPositionToCatalogue)
        : undefined,
      setRebalanceDeviation: isSet(object.setRebalanceDeviation)
        ? CellarV22Governance_SetRebalanceDeviation.fromJSON(object.setRebalanceDeviation)
        : undefined,
      setShareLockPeriod: isSet(object.setShareLockPeriod)
        ? CellarV22Governance_SetShareLockPeriod.fromJSON(object.setShareLockPeriod)
        : undefined,
      setStrategistPlatformCut: isSet(object.setStrategistPlatformCut)
        ? CellarV22Governance_SetStrategistPlatformCut.fromJSON(object.setStrategistPlatformCut)
        : undefined,
      initiateShutdown: isSet(object.initiateShutdown)
        ? CellarV22Governance_InitiateShutdown.fromJSON(object.initiateShutdown)
        : undefined,
      liftShutdown: isSet(object.liftShutdown)
        ? CellarV22Governance_LiftShutdown.fromJSON(object.liftShutdown)
        : undefined,
      forcePositionOut: isSet(object.forcePositionOut)
        ? CellarV22Governance_ForcePositionOut.fromJSON(object.forcePositionOut)
        : undefined,
      toggleIgnorePause: isSet(object.toggleIgnorePause)
        ? CellarV22Governance_ToggleIgnorePause.fromJSON(object.toggleIgnorePause)
        : undefined,
      cachePriceRouter: isSet(object.cachePriceRouter)
        ? CellarV22Governance_CachePriceRouter.fromJSON(object.cachePriceRouter)
        : undefined,
      addPosition: isSet(object.addPosition) ? CellarV22Governance_AddPosition.fromJSON(object.addPosition) : undefined,
      callOnAdaptor: isSet(object.callOnAdaptor)
        ? CellarV22Governance_CallOnAdaptor.fromJSON(object.callOnAdaptor)
        : undefined,
      removePosition: isSet(object.removePosition)
        ? CellarV22Governance_RemovePosition.fromJSON(object.removePosition)
        : undefined,
      removeAdaptorFromCatalogue: isSet(object.removeAdaptorFromCatalogue)
        ? CellarV22Governance_RemoveAdaptorFromCatalogue.fromJSON(object.removeAdaptorFromCatalogue)
        : undefined,
      removePositionFromCatalogue: isSet(object.removePositionFromCatalogue)
        ? CellarV22Governance_RemovePositionFromCatalogue.fromJSON(object.removePositionFromCatalogue)
        : undefined,
      setHoldingPosition: isSet(object.setHoldingPosition)
        ? CellarV22Governance_SetHoldingPosition.fromJSON(object.setHoldingPosition)
        : undefined,
      swapPositions: isSet(object.swapPositions)
        ? CellarV22Governance_SwapPositions.fromJSON(object.swapPositions)
        : undefined,
    };
  },

  toJSON(message: CellarV22Governance_FunctionCall): unknown {
    const obj: any = {};
    if (message.addAdaptorToCatalogue !== undefined) {
      obj.addAdaptorToCatalogue = CellarV22Governance_AddAdaptorToCatalogue.toJSON(message.addAdaptorToCatalogue);
    }
    if (message.addPositionToCatalogue !== undefined) {
      obj.addPositionToCatalogue = CellarV22Governance_AddPositionToCatalogue.toJSON(message.addPositionToCatalogue);
    }
    if (message.setRebalanceDeviation !== undefined) {
      obj.setRebalanceDeviation = CellarV22Governance_SetRebalanceDeviation.toJSON(message.setRebalanceDeviation);
    }
    if (message.setShareLockPeriod !== undefined) {
      obj.setShareLockPeriod = CellarV22Governance_SetShareLockPeriod.toJSON(message.setShareLockPeriod);
    }
    if (message.setStrategistPlatformCut !== undefined) {
      obj.setStrategistPlatformCut = CellarV22Governance_SetStrategistPlatformCut.toJSON(
        message.setStrategistPlatformCut,
      );
    }
    if (message.initiateShutdown !== undefined) {
      obj.initiateShutdown = CellarV22Governance_InitiateShutdown.toJSON(message.initiateShutdown);
    }
    if (message.liftShutdown !== undefined) {
      obj.liftShutdown = CellarV22Governance_LiftShutdown.toJSON(message.liftShutdown);
    }
    if (message.forcePositionOut !== undefined) {
      obj.forcePositionOut = CellarV22Governance_ForcePositionOut.toJSON(message.forcePositionOut);
    }
    if (message.toggleIgnorePause !== undefined) {
      obj.toggleIgnorePause = CellarV22Governance_ToggleIgnorePause.toJSON(message.toggleIgnorePause);
    }
    if (message.cachePriceRouter !== undefined) {
      obj.cachePriceRouter = CellarV22Governance_CachePriceRouter.toJSON(message.cachePriceRouter);
    }
    if (message.addPosition !== undefined) {
      obj.addPosition = CellarV22Governance_AddPosition.toJSON(message.addPosition);
    }
    if (message.callOnAdaptor !== undefined) {
      obj.callOnAdaptor = CellarV22Governance_CallOnAdaptor.toJSON(message.callOnAdaptor);
    }
    if (message.removePosition !== undefined) {
      obj.removePosition = CellarV22Governance_RemovePosition.toJSON(message.removePosition);
    }
    if (message.removeAdaptorFromCatalogue !== undefined) {
      obj.removeAdaptorFromCatalogue = CellarV22Governance_RemoveAdaptorFromCatalogue.toJSON(
        message.removeAdaptorFromCatalogue,
      );
    }
    if (message.removePositionFromCatalogue !== undefined) {
      obj.removePositionFromCatalogue = CellarV22Governance_RemovePositionFromCatalogue.toJSON(
        message.removePositionFromCatalogue,
      );
    }
    if (message.setHoldingPosition !== undefined) {
      obj.setHoldingPosition = CellarV22Governance_SetHoldingPosition.toJSON(message.setHoldingPosition);
    }
    if (message.swapPositions !== undefined) {
      obj.swapPositions = CellarV22Governance_SwapPositions.toJSON(message.swapPositions);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22Governance_FunctionCall>, I>>(
    base?: I,
  ): CellarV22Governance_FunctionCall {
    return CellarV22Governance_FunctionCall.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22Governance_FunctionCall>, I>>(
    object: I,
  ): CellarV22Governance_FunctionCall {
    const message = createBaseCellarV22Governance_FunctionCall();
    message.addAdaptorToCatalogue =
      (object.addAdaptorToCatalogue !== undefined && object.addAdaptorToCatalogue !== null)
        ? CellarV22Governance_AddAdaptorToCatalogue.fromPartial(object.addAdaptorToCatalogue)
        : undefined;
    message.addPositionToCatalogue =
      (object.addPositionToCatalogue !== undefined && object.addPositionToCatalogue !== null)
        ? CellarV22Governance_AddPositionToCatalogue.fromPartial(object.addPositionToCatalogue)
        : undefined;
    message.setRebalanceDeviation =
      (object.setRebalanceDeviation !== undefined && object.setRebalanceDeviation !== null)
        ? CellarV22Governance_SetRebalanceDeviation.fromPartial(object.setRebalanceDeviation)
        : undefined;
    message.setShareLockPeriod = (object.setShareLockPeriod !== undefined && object.setShareLockPeriod !== null)
      ? CellarV22Governance_SetShareLockPeriod.fromPartial(object.setShareLockPeriod)
      : undefined;
    message.setStrategistPlatformCut =
      (object.setStrategistPlatformCut !== undefined && object.setStrategistPlatformCut !== null)
        ? CellarV22Governance_SetStrategistPlatformCut.fromPartial(object.setStrategistPlatformCut)
        : undefined;
    message.initiateShutdown = (object.initiateShutdown !== undefined && object.initiateShutdown !== null)
      ? CellarV22Governance_InitiateShutdown.fromPartial(object.initiateShutdown)
      : undefined;
    message.liftShutdown = (object.liftShutdown !== undefined && object.liftShutdown !== null)
      ? CellarV22Governance_LiftShutdown.fromPartial(object.liftShutdown)
      : undefined;
    message.forcePositionOut = (object.forcePositionOut !== undefined && object.forcePositionOut !== null)
      ? CellarV22Governance_ForcePositionOut.fromPartial(object.forcePositionOut)
      : undefined;
    message.toggleIgnorePause = (object.toggleIgnorePause !== undefined && object.toggleIgnorePause !== null)
      ? CellarV22Governance_ToggleIgnorePause.fromPartial(object.toggleIgnorePause)
      : undefined;
    message.cachePriceRouter = (object.cachePriceRouter !== undefined && object.cachePriceRouter !== null)
      ? CellarV22Governance_CachePriceRouter.fromPartial(object.cachePriceRouter)
      : undefined;
    message.addPosition = (object.addPosition !== undefined && object.addPosition !== null)
      ? CellarV22Governance_AddPosition.fromPartial(object.addPosition)
      : undefined;
    message.callOnAdaptor = (object.callOnAdaptor !== undefined && object.callOnAdaptor !== null)
      ? CellarV22Governance_CallOnAdaptor.fromPartial(object.callOnAdaptor)
      : undefined;
    message.removePosition = (object.removePosition !== undefined && object.removePosition !== null)
      ? CellarV22Governance_RemovePosition.fromPartial(object.removePosition)
      : undefined;
    message.removeAdaptorFromCatalogue =
      (object.removeAdaptorFromCatalogue !== undefined && object.removeAdaptorFromCatalogue !== null)
        ? CellarV22Governance_RemoveAdaptorFromCatalogue.fromPartial(object.removeAdaptorFromCatalogue)
        : undefined;
    message.removePositionFromCatalogue =
      (object.removePositionFromCatalogue !== undefined && object.removePositionFromCatalogue !== null)
        ? CellarV22Governance_RemovePositionFromCatalogue.fromPartial(object.removePositionFromCatalogue)
        : undefined;
    message.setHoldingPosition = (object.setHoldingPosition !== undefined && object.setHoldingPosition !== null)
      ? CellarV22Governance_SetHoldingPosition.fromPartial(object.setHoldingPosition)
      : undefined;
    message.swapPositions = (object.swapPositions !== undefined && object.swapPositions !== null)
      ? CellarV22Governance_SwapPositions.fromPartial(object.swapPositions)
      : undefined;
    return message;
  },
};

function createBaseCellarV22Governance_Multicall(): CellarV22Governance_Multicall {
  return { functionCalls: [] };
}

export const CellarV22Governance_Multicall = {
  encode(message: CellarV22Governance_Multicall, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.functionCalls) {
      CellarV22Governance_FunctionCall.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22Governance_Multicall {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22Governance_Multicall();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functionCalls.push(CellarV22Governance_FunctionCall.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV22Governance_Multicall {
    return {
      functionCalls: globalThis.Array.isArray(object?.functionCalls)
        ? object.functionCalls.map((e: any) => CellarV22Governance_FunctionCall.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CellarV22Governance_Multicall): unknown {
    const obj: any = {};
    if (message.functionCalls?.length) {
      obj.functionCalls = message.functionCalls.map((e) => CellarV22Governance_FunctionCall.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22Governance_Multicall>, I>>(base?: I): CellarV22Governance_Multicall {
    return CellarV22Governance_Multicall.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22Governance_Multicall>, I>>(
    object: I,
  ): CellarV22Governance_Multicall {
    const message = createBaseCellarV22Governance_Multicall();
    message.functionCalls = object.functionCalls?.map((e) => CellarV22Governance_FunctionCall.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCellarV22Governance_AddAdaptorToCatalogue(): CellarV22Governance_AddAdaptorToCatalogue {
  return { adaptor: "" };
}

export const CellarV22Governance_AddAdaptorToCatalogue = {
  encode(message: CellarV22Governance_AddAdaptorToCatalogue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.adaptor !== "") {
      writer.uint32(10).string(message.adaptor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22Governance_AddAdaptorToCatalogue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22Governance_AddAdaptorToCatalogue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.adaptor = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV22Governance_AddAdaptorToCatalogue {
    return { adaptor: isSet(object.adaptor) ? globalThis.String(object.adaptor) : "" };
  },

  toJSON(message: CellarV22Governance_AddAdaptorToCatalogue): unknown {
    const obj: any = {};
    if (message.adaptor !== "") {
      obj.adaptor = message.adaptor;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22Governance_AddAdaptorToCatalogue>, I>>(
    base?: I,
  ): CellarV22Governance_AddAdaptorToCatalogue {
    return CellarV22Governance_AddAdaptorToCatalogue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22Governance_AddAdaptorToCatalogue>, I>>(
    object: I,
  ): CellarV22Governance_AddAdaptorToCatalogue {
    const message = createBaseCellarV22Governance_AddAdaptorToCatalogue();
    message.adaptor = object.adaptor ?? "";
    return message;
  },
};

function createBaseCellarV22Governance_AddPositionToCatalogue(): CellarV22Governance_AddPositionToCatalogue {
  return { positionId: 0 };
}

export const CellarV22Governance_AddPositionToCatalogue = {
  encode(message: CellarV22Governance_AddPositionToCatalogue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.positionId !== 0) {
      writer.uint32(8).uint32(message.positionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22Governance_AddPositionToCatalogue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22Governance_AddPositionToCatalogue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.positionId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV22Governance_AddPositionToCatalogue {
    return { positionId: isSet(object.positionId) ? globalThis.Number(object.positionId) : 0 };
  },

  toJSON(message: CellarV22Governance_AddPositionToCatalogue): unknown {
    const obj: any = {};
    if (message.positionId !== 0) {
      obj.positionId = Math.round(message.positionId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22Governance_AddPositionToCatalogue>, I>>(
    base?: I,
  ): CellarV22Governance_AddPositionToCatalogue {
    return CellarV22Governance_AddPositionToCatalogue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22Governance_AddPositionToCatalogue>, I>>(
    object: I,
  ): CellarV22Governance_AddPositionToCatalogue {
    const message = createBaseCellarV22Governance_AddPositionToCatalogue();
    message.positionId = object.positionId ?? 0;
    return message;
  },
};

function createBaseCellarV22Governance_SetShareLockPeriod(): CellarV22Governance_SetShareLockPeriod {
  return { newLock: "" };
}

export const CellarV22Governance_SetShareLockPeriod = {
  encode(message: CellarV22Governance_SetShareLockPeriod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newLock !== "") {
      writer.uint32(10).string(message.newLock);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22Governance_SetShareLockPeriod {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22Governance_SetShareLockPeriod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.newLock = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV22Governance_SetShareLockPeriod {
    return { newLock: isSet(object.newLock) ? globalThis.String(object.newLock) : "" };
  },

  toJSON(message: CellarV22Governance_SetShareLockPeriod): unknown {
    const obj: any = {};
    if (message.newLock !== "") {
      obj.newLock = message.newLock;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22Governance_SetShareLockPeriod>, I>>(
    base?: I,
  ): CellarV22Governance_SetShareLockPeriod {
    return CellarV22Governance_SetShareLockPeriod.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22Governance_SetShareLockPeriod>, I>>(
    object: I,
  ): CellarV22Governance_SetShareLockPeriod {
    const message = createBaseCellarV22Governance_SetShareLockPeriod();
    message.newLock = object.newLock ?? "";
    return message;
  },
};

function createBaseCellarV22Governance_SetRebalanceDeviation(): CellarV22Governance_SetRebalanceDeviation {
  return { newDeviation: "" };
}

export const CellarV22Governance_SetRebalanceDeviation = {
  encode(message: CellarV22Governance_SetRebalanceDeviation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newDeviation !== "") {
      writer.uint32(10).string(message.newDeviation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22Governance_SetRebalanceDeviation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22Governance_SetRebalanceDeviation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.newDeviation = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV22Governance_SetRebalanceDeviation {
    return { newDeviation: isSet(object.newDeviation) ? globalThis.String(object.newDeviation) : "" };
  },

  toJSON(message: CellarV22Governance_SetRebalanceDeviation): unknown {
    const obj: any = {};
    if (message.newDeviation !== "") {
      obj.newDeviation = message.newDeviation;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22Governance_SetRebalanceDeviation>, I>>(
    base?: I,
  ): CellarV22Governance_SetRebalanceDeviation {
    return CellarV22Governance_SetRebalanceDeviation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22Governance_SetRebalanceDeviation>, I>>(
    object: I,
  ): CellarV22Governance_SetRebalanceDeviation {
    const message = createBaseCellarV22Governance_SetRebalanceDeviation();
    message.newDeviation = object.newDeviation ?? "";
    return message;
  },
};

function createBaseCellarV22Governance_InitiateShutdown(): CellarV22Governance_InitiateShutdown {
  return {};
}

export const CellarV22Governance_InitiateShutdown = {
  encode(_: CellarV22Governance_InitiateShutdown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22Governance_InitiateShutdown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22Governance_InitiateShutdown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): CellarV22Governance_InitiateShutdown {
    return {};
  },

  toJSON(_: CellarV22Governance_InitiateShutdown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22Governance_InitiateShutdown>, I>>(
    base?: I,
  ): CellarV22Governance_InitiateShutdown {
    return CellarV22Governance_InitiateShutdown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22Governance_InitiateShutdown>, I>>(
    _: I,
  ): CellarV22Governance_InitiateShutdown {
    const message = createBaseCellarV22Governance_InitiateShutdown();
    return message;
  },
};

function createBaseCellarV22Governance_SetStrategistPlatformCut(): CellarV22Governance_SetStrategistPlatformCut {
  return { newCut: 0 };
}

export const CellarV22Governance_SetStrategistPlatformCut = {
  encode(message: CellarV22Governance_SetStrategistPlatformCut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newCut !== 0) {
      writer.uint32(8).uint64(message.newCut);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22Governance_SetStrategistPlatformCut {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22Governance_SetStrategistPlatformCut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.newCut = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV22Governance_SetStrategistPlatformCut {
    return { newCut: isSet(object.newCut) ? globalThis.Number(object.newCut) : 0 };
  },

  toJSON(message: CellarV22Governance_SetStrategistPlatformCut): unknown {
    const obj: any = {};
    if (message.newCut !== 0) {
      obj.newCut = Math.round(message.newCut);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22Governance_SetStrategistPlatformCut>, I>>(
    base?: I,
  ): CellarV22Governance_SetStrategistPlatformCut {
    return CellarV22Governance_SetStrategistPlatformCut.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22Governance_SetStrategistPlatformCut>, I>>(
    object: I,
  ): CellarV22Governance_SetStrategistPlatformCut {
    const message = createBaseCellarV22Governance_SetStrategistPlatformCut();
    message.newCut = object.newCut ?? 0;
    return message;
  },
};

function createBaseCellarV22Governance_LiftShutdown(): CellarV22Governance_LiftShutdown {
  return {};
}

export const CellarV22Governance_LiftShutdown = {
  encode(_: CellarV22Governance_LiftShutdown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22Governance_LiftShutdown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22Governance_LiftShutdown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): CellarV22Governance_LiftShutdown {
    return {};
  },

  toJSON(_: CellarV22Governance_LiftShutdown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22Governance_LiftShutdown>, I>>(
    base?: I,
  ): CellarV22Governance_LiftShutdown {
    return CellarV22Governance_LiftShutdown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22Governance_LiftShutdown>, I>>(
    _: I,
  ): CellarV22Governance_LiftShutdown {
    const message = createBaseCellarV22Governance_LiftShutdown();
    return message;
  },
};

function createBaseCellarV22Governance_ForcePositionOut(): CellarV22Governance_ForcePositionOut {
  return { index: 0, positionId: 0, inDebtArray: false };
}

export const CellarV22Governance_ForcePositionOut = {
  encode(message: CellarV22Governance_ForcePositionOut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.positionId !== 0) {
      writer.uint32(16).uint32(message.positionId);
    }
    if (message.inDebtArray === true) {
      writer.uint32(24).bool(message.inDebtArray);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22Governance_ForcePositionOut {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22Governance_ForcePositionOut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.index = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.positionId = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.inDebtArray = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV22Governance_ForcePositionOut {
    return {
      index: isSet(object.index) ? globalThis.Number(object.index) : 0,
      positionId: isSet(object.positionId) ? globalThis.Number(object.positionId) : 0,
      inDebtArray: isSet(object.inDebtArray) ? globalThis.Boolean(object.inDebtArray) : false,
    };
  },

  toJSON(message: CellarV22Governance_ForcePositionOut): unknown {
    const obj: any = {};
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    if (message.positionId !== 0) {
      obj.positionId = Math.round(message.positionId);
    }
    if (message.inDebtArray === true) {
      obj.inDebtArray = message.inDebtArray;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22Governance_ForcePositionOut>, I>>(
    base?: I,
  ): CellarV22Governance_ForcePositionOut {
    return CellarV22Governance_ForcePositionOut.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22Governance_ForcePositionOut>, I>>(
    object: I,
  ): CellarV22Governance_ForcePositionOut {
    const message = createBaseCellarV22Governance_ForcePositionOut();
    message.index = object.index ?? 0;
    message.positionId = object.positionId ?? 0;
    message.inDebtArray = object.inDebtArray ?? false;
    return message;
  },
};

function createBaseCellarV22Governance_ToggleIgnorePause(): CellarV22Governance_ToggleIgnorePause {
  return { ignore: false };
}

export const CellarV22Governance_ToggleIgnorePause = {
  encode(message: CellarV22Governance_ToggleIgnorePause, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ignore === true) {
      writer.uint32(8).bool(message.ignore);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22Governance_ToggleIgnorePause {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22Governance_ToggleIgnorePause();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.ignore = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV22Governance_ToggleIgnorePause {
    return { ignore: isSet(object.ignore) ? globalThis.Boolean(object.ignore) : false };
  },

  toJSON(message: CellarV22Governance_ToggleIgnorePause): unknown {
    const obj: any = {};
    if (message.ignore === true) {
      obj.ignore = message.ignore;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22Governance_ToggleIgnorePause>, I>>(
    base?: I,
  ): CellarV22Governance_ToggleIgnorePause {
    return CellarV22Governance_ToggleIgnorePause.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22Governance_ToggleIgnorePause>, I>>(
    object: I,
  ): CellarV22Governance_ToggleIgnorePause {
    const message = createBaseCellarV22Governance_ToggleIgnorePause();
    message.ignore = object.ignore ?? false;
    return message;
  },
};

function createBaseCellarV22Governance_CachePriceRouter(): CellarV22Governance_CachePriceRouter {
  return { checkTotalAssets: false, allowableRange: 0, expectedPriceRouter: "" };
}

export const CellarV22Governance_CachePriceRouter = {
  encode(message: CellarV22Governance_CachePriceRouter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.checkTotalAssets === true) {
      writer.uint32(8).bool(message.checkTotalAssets);
    }
    if (message.allowableRange !== 0) {
      writer.uint32(16).uint32(message.allowableRange);
    }
    if (message.expectedPriceRouter !== "") {
      writer.uint32(26).string(message.expectedPriceRouter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22Governance_CachePriceRouter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22Governance_CachePriceRouter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.checkTotalAssets = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.allowableRange = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.expectedPriceRouter = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV22Governance_CachePriceRouter {
    return {
      checkTotalAssets: isSet(object.checkTotalAssets) ? globalThis.Boolean(object.checkTotalAssets) : false,
      allowableRange: isSet(object.allowableRange) ? globalThis.Number(object.allowableRange) : 0,
      expectedPriceRouter: isSet(object.expectedPriceRouter) ? globalThis.String(object.expectedPriceRouter) : "",
    };
  },

  toJSON(message: CellarV22Governance_CachePriceRouter): unknown {
    const obj: any = {};
    if (message.checkTotalAssets === true) {
      obj.checkTotalAssets = message.checkTotalAssets;
    }
    if (message.allowableRange !== 0) {
      obj.allowableRange = Math.round(message.allowableRange);
    }
    if (message.expectedPriceRouter !== "") {
      obj.expectedPriceRouter = message.expectedPriceRouter;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22Governance_CachePriceRouter>, I>>(
    base?: I,
  ): CellarV22Governance_CachePriceRouter {
    return CellarV22Governance_CachePriceRouter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22Governance_CachePriceRouter>, I>>(
    object: I,
  ): CellarV22Governance_CachePriceRouter {
    const message = createBaseCellarV22Governance_CachePriceRouter();
    message.checkTotalAssets = object.checkTotalAssets ?? false;
    message.allowableRange = object.allowableRange ?? 0;
    message.expectedPriceRouter = object.expectedPriceRouter ?? "";
    return message;
  },
};

function createBaseCellarV22Governance_AddPosition(): CellarV22Governance_AddPosition {
  return { index: 0, positionId: 0, configurationData: new Uint8Array(0), inDebtArray: false };
}

export const CellarV22Governance_AddPosition = {
  encode(message: CellarV22Governance_AddPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.positionId !== 0) {
      writer.uint32(16).uint32(message.positionId);
    }
    if (message.configurationData.length !== 0) {
      writer.uint32(26).bytes(message.configurationData);
    }
    if (message.inDebtArray === true) {
      writer.uint32(32).bool(message.inDebtArray);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22Governance_AddPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22Governance_AddPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.index = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.positionId = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.configurationData = reader.bytes();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.inDebtArray = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV22Governance_AddPosition {
    return {
      index: isSet(object.index) ? globalThis.Number(object.index) : 0,
      positionId: isSet(object.positionId) ? globalThis.Number(object.positionId) : 0,
      configurationData: isSet(object.configurationData)
        ? bytesFromBase64(object.configurationData)
        : new Uint8Array(0),
      inDebtArray: isSet(object.inDebtArray) ? globalThis.Boolean(object.inDebtArray) : false,
    };
  },

  toJSON(message: CellarV22Governance_AddPosition): unknown {
    const obj: any = {};
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    if (message.positionId !== 0) {
      obj.positionId = Math.round(message.positionId);
    }
    if (message.configurationData.length !== 0) {
      obj.configurationData = base64FromBytes(message.configurationData);
    }
    if (message.inDebtArray === true) {
      obj.inDebtArray = message.inDebtArray;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22Governance_AddPosition>, I>>(base?: I): CellarV22Governance_AddPosition {
    return CellarV22Governance_AddPosition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22Governance_AddPosition>, I>>(
    object: I,
  ): CellarV22Governance_AddPosition {
    const message = createBaseCellarV22Governance_AddPosition();
    message.index = object.index ?? 0;
    message.positionId = object.positionId ?? 0;
    message.configurationData = object.configurationData ?? new Uint8Array(0);
    message.inDebtArray = object.inDebtArray ?? false;
    return message;
  },
};

function createBaseCellarV22Governance_CallOnAdaptor(): CellarV22Governance_CallOnAdaptor {
  return { data: [] };
}

export const CellarV22Governance_CallOnAdaptor = {
  encode(message: CellarV22Governance_CallOnAdaptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.data) {
      AdaptorCall.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22Governance_CallOnAdaptor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22Governance_CallOnAdaptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data.push(AdaptorCall.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV22Governance_CallOnAdaptor {
    return { data: globalThis.Array.isArray(object?.data) ? object.data.map((e: any) => AdaptorCall.fromJSON(e)) : [] };
  },

  toJSON(message: CellarV22Governance_CallOnAdaptor): unknown {
    const obj: any = {};
    if (message.data?.length) {
      obj.data = message.data.map((e) => AdaptorCall.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22Governance_CallOnAdaptor>, I>>(
    base?: I,
  ): CellarV22Governance_CallOnAdaptor {
    return CellarV22Governance_CallOnAdaptor.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22Governance_CallOnAdaptor>, I>>(
    object: I,
  ): CellarV22Governance_CallOnAdaptor {
    const message = createBaseCellarV22Governance_CallOnAdaptor();
    message.data = object.data?.map((e) => AdaptorCall.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCellarV22Governance_RemovePosition(): CellarV22Governance_RemovePosition {
  return { index: 0, inDebtArray: false };
}

export const CellarV22Governance_RemovePosition = {
  encode(message: CellarV22Governance_RemovePosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.inDebtArray === true) {
      writer.uint32(16).bool(message.inDebtArray);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22Governance_RemovePosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22Governance_RemovePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.index = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.inDebtArray = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV22Governance_RemovePosition {
    return {
      index: isSet(object.index) ? globalThis.Number(object.index) : 0,
      inDebtArray: isSet(object.inDebtArray) ? globalThis.Boolean(object.inDebtArray) : false,
    };
  },

  toJSON(message: CellarV22Governance_RemovePosition): unknown {
    const obj: any = {};
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    if (message.inDebtArray === true) {
      obj.inDebtArray = message.inDebtArray;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22Governance_RemovePosition>, I>>(
    base?: I,
  ): CellarV22Governance_RemovePosition {
    return CellarV22Governance_RemovePosition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22Governance_RemovePosition>, I>>(
    object: I,
  ): CellarV22Governance_RemovePosition {
    const message = createBaseCellarV22Governance_RemovePosition();
    message.index = object.index ?? 0;
    message.inDebtArray = object.inDebtArray ?? false;
    return message;
  },
};

function createBaseCellarV22Governance_RemoveAdaptorFromCatalogue(): CellarV22Governance_RemoveAdaptorFromCatalogue {
  return { adaptor: "" };
}

export const CellarV22Governance_RemoveAdaptorFromCatalogue = {
  encode(
    message: CellarV22Governance_RemoveAdaptorFromCatalogue,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.adaptor !== "") {
      writer.uint32(10).string(message.adaptor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22Governance_RemoveAdaptorFromCatalogue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22Governance_RemoveAdaptorFromCatalogue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.adaptor = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV22Governance_RemoveAdaptorFromCatalogue {
    return { adaptor: isSet(object.adaptor) ? globalThis.String(object.adaptor) : "" };
  },

  toJSON(message: CellarV22Governance_RemoveAdaptorFromCatalogue): unknown {
    const obj: any = {};
    if (message.adaptor !== "") {
      obj.adaptor = message.adaptor;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22Governance_RemoveAdaptorFromCatalogue>, I>>(
    base?: I,
  ): CellarV22Governance_RemoveAdaptorFromCatalogue {
    return CellarV22Governance_RemoveAdaptorFromCatalogue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22Governance_RemoveAdaptorFromCatalogue>, I>>(
    object: I,
  ): CellarV22Governance_RemoveAdaptorFromCatalogue {
    const message = createBaseCellarV22Governance_RemoveAdaptorFromCatalogue();
    message.adaptor = object.adaptor ?? "";
    return message;
  },
};

function createBaseCellarV22Governance_RemovePositionFromCatalogue(): CellarV22Governance_RemovePositionFromCatalogue {
  return { positionId: 0 };
}

export const CellarV22Governance_RemovePositionFromCatalogue = {
  encode(
    message: CellarV22Governance_RemovePositionFromCatalogue,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.positionId !== 0) {
      writer.uint32(8).uint32(message.positionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22Governance_RemovePositionFromCatalogue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22Governance_RemovePositionFromCatalogue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.positionId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV22Governance_RemovePositionFromCatalogue {
    return { positionId: isSet(object.positionId) ? globalThis.Number(object.positionId) : 0 };
  },

  toJSON(message: CellarV22Governance_RemovePositionFromCatalogue): unknown {
    const obj: any = {};
    if (message.positionId !== 0) {
      obj.positionId = Math.round(message.positionId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22Governance_RemovePositionFromCatalogue>, I>>(
    base?: I,
  ): CellarV22Governance_RemovePositionFromCatalogue {
    return CellarV22Governance_RemovePositionFromCatalogue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22Governance_RemovePositionFromCatalogue>, I>>(
    object: I,
  ): CellarV22Governance_RemovePositionFromCatalogue {
    const message = createBaseCellarV22Governance_RemovePositionFromCatalogue();
    message.positionId = object.positionId ?? 0;
    return message;
  },
};

function createBaseCellarV22Governance_SetHoldingPosition(): CellarV22Governance_SetHoldingPosition {
  return { positionId: 0 };
}

export const CellarV22Governance_SetHoldingPosition = {
  encode(message: CellarV22Governance_SetHoldingPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.positionId !== 0) {
      writer.uint32(8).uint32(message.positionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22Governance_SetHoldingPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22Governance_SetHoldingPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.positionId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV22Governance_SetHoldingPosition {
    return { positionId: isSet(object.positionId) ? globalThis.Number(object.positionId) : 0 };
  },

  toJSON(message: CellarV22Governance_SetHoldingPosition): unknown {
    const obj: any = {};
    if (message.positionId !== 0) {
      obj.positionId = Math.round(message.positionId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22Governance_SetHoldingPosition>, I>>(
    base?: I,
  ): CellarV22Governance_SetHoldingPosition {
    return CellarV22Governance_SetHoldingPosition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22Governance_SetHoldingPosition>, I>>(
    object: I,
  ): CellarV22Governance_SetHoldingPosition {
    const message = createBaseCellarV22Governance_SetHoldingPosition();
    message.positionId = object.positionId ?? 0;
    return message;
  },
};

function createBaseCellarV22Governance_SwapPositions(): CellarV22Governance_SwapPositions {
  return { index1: 0, index2: 0, inDebtArray: false };
}

export const CellarV22Governance_SwapPositions = {
  encode(message: CellarV22Governance_SwapPositions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index1 !== 0) {
      writer.uint32(8).uint32(message.index1);
    }
    if (message.index2 !== 0) {
      writer.uint32(16).uint32(message.index2);
    }
    if (message.inDebtArray === true) {
      writer.uint32(24).bool(message.inDebtArray);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV22Governance_SwapPositions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV22Governance_SwapPositions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.index1 = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.index2 = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.inDebtArray = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV22Governance_SwapPositions {
    return {
      index1: isSet(object.index1) ? globalThis.Number(object.index1) : 0,
      index2: isSet(object.index2) ? globalThis.Number(object.index2) : 0,
      inDebtArray: isSet(object.inDebtArray) ? globalThis.Boolean(object.inDebtArray) : false,
    };
  },

  toJSON(message: CellarV22Governance_SwapPositions): unknown {
    const obj: any = {};
    if (message.index1 !== 0) {
      obj.index1 = Math.round(message.index1);
    }
    if (message.index2 !== 0) {
      obj.index2 = Math.round(message.index2);
    }
    if (message.inDebtArray === true) {
      obj.inDebtArray = message.inDebtArray;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV22Governance_SwapPositions>, I>>(
    base?: I,
  ): CellarV22Governance_SwapPositions {
    return CellarV22Governance_SwapPositions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV22Governance_SwapPositions>, I>>(
    object: I,
  ): CellarV22Governance_SwapPositions {
    const message = createBaseCellarV22Governance_SwapPositions();
    message.index1 = object.index1 ?? 0;
    message.index2 = object.index2 ?? 0;
    message.inDebtArray = object.inDebtArray ?? false;
    return message;
  },
};

function createBaseCellarV25(): CellarV25 {
  return { functionCall: undefined, multicall: undefined };
}

export const CellarV25 = {
  encode(message: CellarV25, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionCall !== undefined) {
      CellarV25_FunctionCall.encode(message.functionCall, writer.uint32(10).fork()).ldelim();
    }
    if (message.multicall !== undefined) {
      CellarV25_Multicall.encode(message.multicall, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functionCall = CellarV25_FunctionCall.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.multicall = CellarV25_Multicall.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25 {
    return {
      functionCall: isSet(object.functionCall) ? CellarV25_FunctionCall.fromJSON(object.functionCall) : undefined,
      multicall: isSet(object.multicall) ? CellarV25_Multicall.fromJSON(object.multicall) : undefined,
    };
  },

  toJSON(message: CellarV25): unknown {
    const obj: any = {};
    if (message.functionCall !== undefined) {
      obj.functionCall = CellarV25_FunctionCall.toJSON(message.functionCall);
    }
    if (message.multicall !== undefined) {
      obj.multicall = CellarV25_Multicall.toJSON(message.multicall);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25>, I>>(base?: I): CellarV25 {
    return CellarV25.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25>, I>>(object: I): CellarV25 {
    const message = createBaseCellarV25();
    message.functionCall = (object.functionCall !== undefined && object.functionCall !== null)
      ? CellarV25_FunctionCall.fromPartial(object.functionCall)
      : undefined;
    message.multicall = (object.multicall !== undefined && object.multicall !== null)
      ? CellarV25_Multicall.fromPartial(object.multicall)
      : undefined;
    return message;
  },
};

function createBaseCellarV25_FunctionCall(): CellarV25_FunctionCall {
  return {
    addPosition: undefined,
    callOnAdaptor: undefined,
    removePosition: undefined,
    setHoldingPosition: undefined,
    setStrategistPayoutAddress: undefined,
    swapPositions: undefined,
    setShareLockPeriod: undefined,
    initiateShutdown: undefined,
    liftShutdown: undefined,
    removeAdaptorFromCatalogue: undefined,
    removePositionFromCatalogue: undefined,
    decreaseShareSupplyCap: undefined,
    setAlternativeAssetData: undefined,
    dropAlternativeAssetData: undefined,
    addAdaptorToCatalogue: undefined,
    addPositionToCatalogue: undefined,
    setRebalanceDeviation: undefined,
    setStrategistPlatformCut: undefined,
    setSharePriceOracle: undefined,
    increaseShareSupplyCap: undefined,
    cachePriceRouter: undefined,
  };
}

export const CellarV25_FunctionCall = {
  encode(message: CellarV25_FunctionCall, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addPosition !== undefined) {
      CellarV25_AddPosition.encode(message.addPosition, writer.uint32(10).fork()).ldelim();
    }
    if (message.callOnAdaptor !== undefined) {
      CellarV25_CallOnAdaptor.encode(message.callOnAdaptor, writer.uint32(18).fork()).ldelim();
    }
    if (message.removePosition !== undefined) {
      CellarV25_RemovePosition.encode(message.removePosition, writer.uint32(26).fork()).ldelim();
    }
    if (message.setHoldingPosition !== undefined) {
      CellarV25_SetHoldingPosition.encode(message.setHoldingPosition, writer.uint32(34).fork()).ldelim();
    }
    if (message.setStrategistPayoutAddress !== undefined) {
      CellarV25_SetStrategistPayoutAddress.encode(message.setStrategistPayoutAddress, writer.uint32(42).fork())
        .ldelim();
    }
    if (message.swapPositions !== undefined) {
      CellarV25_SwapPositions.encode(message.swapPositions, writer.uint32(50).fork()).ldelim();
    }
    if (message.setShareLockPeriod !== undefined) {
      CellarV25_SetShareLockPeriod.encode(message.setShareLockPeriod, writer.uint32(66).fork()).ldelim();
    }
    if (message.initiateShutdown !== undefined) {
      CellarV25_InitiateShutdown.encode(message.initiateShutdown, writer.uint32(74).fork()).ldelim();
    }
    if (message.liftShutdown !== undefined) {
      CellarV25_LiftShutdown.encode(message.liftShutdown, writer.uint32(90).fork()).ldelim();
    }
    if (message.removeAdaptorFromCatalogue !== undefined) {
      CellarV25_RemoveAdaptorFromCatalogue.encode(message.removeAdaptorFromCatalogue, writer.uint32(98).fork())
        .ldelim();
    }
    if (message.removePositionFromCatalogue !== undefined) {
      CellarV25_RemovePositionFromCatalogue.encode(message.removePositionFromCatalogue, writer.uint32(106).fork())
        .ldelim();
    }
    if (message.decreaseShareSupplyCap !== undefined) {
      CellarV25_DecreaseShareSupplyCap.encode(message.decreaseShareSupplyCap, writer.uint32(114).fork()).ldelim();
    }
    if (message.setAlternativeAssetData !== undefined) {
      CellarV25_SetAlternativeAssetData.encode(message.setAlternativeAssetData, writer.uint32(122).fork()).ldelim();
    }
    if (message.dropAlternativeAssetData !== undefined) {
      CellarV25_DropAlternativeAssetData.encode(message.dropAlternativeAssetData, writer.uint32(130).fork()).ldelim();
    }
    if (message.addAdaptorToCatalogue !== undefined) {
      CellarV25_AddAdaptorToCatalogue.encode(message.addAdaptorToCatalogue, writer.uint32(138).fork()).ldelim();
    }
    if (message.addPositionToCatalogue !== undefined) {
      CellarV25_AddPositionToCatalogue.encode(message.addPositionToCatalogue, writer.uint32(146).fork()).ldelim();
    }
    if (message.setRebalanceDeviation !== undefined) {
      CellarV25_SetRebalanceDeviation.encode(message.setRebalanceDeviation, writer.uint32(154).fork()).ldelim();
    }
    if (message.setStrategistPlatformCut !== undefined) {
      CellarV25_SetStrategistPlatformCut.encode(message.setStrategistPlatformCut, writer.uint32(162).fork()).ldelim();
    }
    if (message.setSharePriceOracle !== undefined) {
      CellarV25_SetSharePriceOracle.encode(message.setSharePriceOracle, writer.uint32(170).fork()).ldelim();
    }
    if (message.increaseShareSupplyCap !== undefined) {
      CellarV25_IncreaseShareSupplyCap.encode(message.increaseShareSupplyCap, writer.uint32(178).fork()).ldelim();
    }
    if (message.cachePriceRouter !== undefined) {
      CellarV25_CachePriceRouter.encode(message.cachePriceRouter, writer.uint32(186).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25_FunctionCall {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25_FunctionCall();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.addPosition = CellarV25_AddPosition.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.callOnAdaptor = CellarV25_CallOnAdaptor.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.removePosition = CellarV25_RemovePosition.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.setHoldingPosition = CellarV25_SetHoldingPosition.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.setStrategistPayoutAddress = CellarV25_SetStrategistPayoutAddress.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.swapPositions = CellarV25_SwapPositions.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.setShareLockPeriod = CellarV25_SetShareLockPeriod.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.initiateShutdown = CellarV25_InitiateShutdown.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.liftShutdown = CellarV25_LiftShutdown.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.removeAdaptorFromCatalogue = CellarV25_RemoveAdaptorFromCatalogue.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.removePositionFromCatalogue = CellarV25_RemovePositionFromCatalogue.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.decreaseShareSupplyCap = CellarV25_DecreaseShareSupplyCap.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.setAlternativeAssetData = CellarV25_SetAlternativeAssetData.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.dropAlternativeAssetData = CellarV25_DropAlternativeAssetData.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.addAdaptorToCatalogue = CellarV25_AddAdaptorToCatalogue.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.addPositionToCatalogue = CellarV25_AddPositionToCatalogue.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.setRebalanceDeviation = CellarV25_SetRebalanceDeviation.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.setStrategistPlatformCut = CellarV25_SetStrategistPlatformCut.decode(reader, reader.uint32());
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.setSharePriceOracle = CellarV25_SetSharePriceOracle.decode(reader, reader.uint32());
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.increaseShareSupplyCap = CellarV25_IncreaseShareSupplyCap.decode(reader, reader.uint32());
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.cachePriceRouter = CellarV25_CachePriceRouter.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25_FunctionCall {
    return {
      addPosition: isSet(object.addPosition) ? CellarV25_AddPosition.fromJSON(object.addPosition) : undefined,
      callOnAdaptor: isSet(object.callOnAdaptor) ? CellarV25_CallOnAdaptor.fromJSON(object.callOnAdaptor) : undefined,
      removePosition: isSet(object.removePosition)
        ? CellarV25_RemovePosition.fromJSON(object.removePosition)
        : undefined,
      setHoldingPosition: isSet(object.setHoldingPosition)
        ? CellarV25_SetHoldingPosition.fromJSON(object.setHoldingPosition)
        : undefined,
      setStrategistPayoutAddress: isSet(object.setStrategistPayoutAddress)
        ? CellarV25_SetStrategistPayoutAddress.fromJSON(object.setStrategistPayoutAddress)
        : undefined,
      swapPositions: isSet(object.swapPositions) ? CellarV25_SwapPositions.fromJSON(object.swapPositions) : undefined,
      setShareLockPeriod: isSet(object.setShareLockPeriod)
        ? CellarV25_SetShareLockPeriod.fromJSON(object.setShareLockPeriod)
        : undefined,
      initiateShutdown: isSet(object.initiateShutdown)
        ? CellarV25_InitiateShutdown.fromJSON(object.initiateShutdown)
        : undefined,
      liftShutdown: isSet(object.liftShutdown) ? CellarV25_LiftShutdown.fromJSON(object.liftShutdown) : undefined,
      removeAdaptorFromCatalogue: isSet(object.removeAdaptorFromCatalogue)
        ? CellarV25_RemoveAdaptorFromCatalogue.fromJSON(object.removeAdaptorFromCatalogue)
        : undefined,
      removePositionFromCatalogue: isSet(object.removePositionFromCatalogue)
        ? CellarV25_RemovePositionFromCatalogue.fromJSON(object.removePositionFromCatalogue)
        : undefined,
      decreaseShareSupplyCap: isSet(object.decreaseShareSupplyCap)
        ? CellarV25_DecreaseShareSupplyCap.fromJSON(object.decreaseShareSupplyCap)
        : undefined,
      setAlternativeAssetData: isSet(object.setAlternativeAssetData)
        ? CellarV25_SetAlternativeAssetData.fromJSON(object.setAlternativeAssetData)
        : undefined,
      dropAlternativeAssetData: isSet(object.dropAlternativeAssetData)
        ? CellarV25_DropAlternativeAssetData.fromJSON(object.dropAlternativeAssetData)
        : undefined,
      addAdaptorToCatalogue: isSet(object.addAdaptorToCatalogue)
        ? CellarV25_AddAdaptorToCatalogue.fromJSON(object.addAdaptorToCatalogue)
        : undefined,
      addPositionToCatalogue: isSet(object.addPositionToCatalogue)
        ? CellarV25_AddPositionToCatalogue.fromJSON(object.addPositionToCatalogue)
        : undefined,
      setRebalanceDeviation: isSet(object.setRebalanceDeviation)
        ? CellarV25_SetRebalanceDeviation.fromJSON(object.setRebalanceDeviation)
        : undefined,
      setStrategistPlatformCut: isSet(object.setStrategistPlatformCut)
        ? CellarV25_SetStrategistPlatformCut.fromJSON(object.setStrategistPlatformCut)
        : undefined,
      setSharePriceOracle: isSet(object.setSharePriceOracle)
        ? CellarV25_SetSharePriceOracle.fromJSON(object.setSharePriceOracle)
        : undefined,
      increaseShareSupplyCap: isSet(object.increaseShareSupplyCap)
        ? CellarV25_IncreaseShareSupplyCap.fromJSON(object.increaseShareSupplyCap)
        : undefined,
      cachePriceRouter: isSet(object.cachePriceRouter)
        ? CellarV25_CachePriceRouter.fromJSON(object.cachePriceRouter)
        : undefined,
    };
  },

  toJSON(message: CellarV25_FunctionCall): unknown {
    const obj: any = {};
    if (message.addPosition !== undefined) {
      obj.addPosition = CellarV25_AddPosition.toJSON(message.addPosition);
    }
    if (message.callOnAdaptor !== undefined) {
      obj.callOnAdaptor = CellarV25_CallOnAdaptor.toJSON(message.callOnAdaptor);
    }
    if (message.removePosition !== undefined) {
      obj.removePosition = CellarV25_RemovePosition.toJSON(message.removePosition);
    }
    if (message.setHoldingPosition !== undefined) {
      obj.setHoldingPosition = CellarV25_SetHoldingPosition.toJSON(message.setHoldingPosition);
    }
    if (message.setStrategistPayoutAddress !== undefined) {
      obj.setStrategistPayoutAddress = CellarV25_SetStrategistPayoutAddress.toJSON(message.setStrategistPayoutAddress);
    }
    if (message.swapPositions !== undefined) {
      obj.swapPositions = CellarV25_SwapPositions.toJSON(message.swapPositions);
    }
    if (message.setShareLockPeriod !== undefined) {
      obj.setShareLockPeriod = CellarV25_SetShareLockPeriod.toJSON(message.setShareLockPeriod);
    }
    if (message.initiateShutdown !== undefined) {
      obj.initiateShutdown = CellarV25_InitiateShutdown.toJSON(message.initiateShutdown);
    }
    if (message.liftShutdown !== undefined) {
      obj.liftShutdown = CellarV25_LiftShutdown.toJSON(message.liftShutdown);
    }
    if (message.removeAdaptorFromCatalogue !== undefined) {
      obj.removeAdaptorFromCatalogue = CellarV25_RemoveAdaptorFromCatalogue.toJSON(message.removeAdaptorFromCatalogue);
    }
    if (message.removePositionFromCatalogue !== undefined) {
      obj.removePositionFromCatalogue = CellarV25_RemovePositionFromCatalogue.toJSON(
        message.removePositionFromCatalogue,
      );
    }
    if (message.decreaseShareSupplyCap !== undefined) {
      obj.decreaseShareSupplyCap = CellarV25_DecreaseShareSupplyCap.toJSON(message.decreaseShareSupplyCap);
    }
    if (message.setAlternativeAssetData !== undefined) {
      obj.setAlternativeAssetData = CellarV25_SetAlternativeAssetData.toJSON(message.setAlternativeAssetData);
    }
    if (message.dropAlternativeAssetData !== undefined) {
      obj.dropAlternativeAssetData = CellarV25_DropAlternativeAssetData.toJSON(message.dropAlternativeAssetData);
    }
    if (message.addAdaptorToCatalogue !== undefined) {
      obj.addAdaptorToCatalogue = CellarV25_AddAdaptorToCatalogue.toJSON(message.addAdaptorToCatalogue);
    }
    if (message.addPositionToCatalogue !== undefined) {
      obj.addPositionToCatalogue = CellarV25_AddPositionToCatalogue.toJSON(message.addPositionToCatalogue);
    }
    if (message.setRebalanceDeviation !== undefined) {
      obj.setRebalanceDeviation = CellarV25_SetRebalanceDeviation.toJSON(message.setRebalanceDeviation);
    }
    if (message.setStrategistPlatformCut !== undefined) {
      obj.setStrategistPlatformCut = CellarV25_SetStrategistPlatformCut.toJSON(message.setStrategistPlatformCut);
    }
    if (message.setSharePriceOracle !== undefined) {
      obj.setSharePriceOracle = CellarV25_SetSharePriceOracle.toJSON(message.setSharePriceOracle);
    }
    if (message.increaseShareSupplyCap !== undefined) {
      obj.increaseShareSupplyCap = CellarV25_IncreaseShareSupplyCap.toJSON(message.increaseShareSupplyCap);
    }
    if (message.cachePriceRouter !== undefined) {
      obj.cachePriceRouter = CellarV25_CachePriceRouter.toJSON(message.cachePriceRouter);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25_FunctionCall>, I>>(base?: I): CellarV25_FunctionCall {
    return CellarV25_FunctionCall.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25_FunctionCall>, I>>(object: I): CellarV25_FunctionCall {
    const message = createBaseCellarV25_FunctionCall();
    message.addPosition = (object.addPosition !== undefined && object.addPosition !== null)
      ? CellarV25_AddPosition.fromPartial(object.addPosition)
      : undefined;
    message.callOnAdaptor = (object.callOnAdaptor !== undefined && object.callOnAdaptor !== null)
      ? CellarV25_CallOnAdaptor.fromPartial(object.callOnAdaptor)
      : undefined;
    message.removePosition = (object.removePosition !== undefined && object.removePosition !== null)
      ? CellarV25_RemovePosition.fromPartial(object.removePosition)
      : undefined;
    message.setHoldingPosition = (object.setHoldingPosition !== undefined && object.setHoldingPosition !== null)
      ? CellarV25_SetHoldingPosition.fromPartial(object.setHoldingPosition)
      : undefined;
    message.setStrategistPayoutAddress =
      (object.setStrategistPayoutAddress !== undefined && object.setStrategistPayoutAddress !== null)
        ? CellarV25_SetStrategistPayoutAddress.fromPartial(object.setStrategistPayoutAddress)
        : undefined;
    message.swapPositions = (object.swapPositions !== undefined && object.swapPositions !== null)
      ? CellarV25_SwapPositions.fromPartial(object.swapPositions)
      : undefined;
    message.setShareLockPeriod = (object.setShareLockPeriod !== undefined && object.setShareLockPeriod !== null)
      ? CellarV25_SetShareLockPeriod.fromPartial(object.setShareLockPeriod)
      : undefined;
    message.initiateShutdown = (object.initiateShutdown !== undefined && object.initiateShutdown !== null)
      ? CellarV25_InitiateShutdown.fromPartial(object.initiateShutdown)
      : undefined;
    message.liftShutdown = (object.liftShutdown !== undefined && object.liftShutdown !== null)
      ? CellarV25_LiftShutdown.fromPartial(object.liftShutdown)
      : undefined;
    message.removeAdaptorFromCatalogue =
      (object.removeAdaptorFromCatalogue !== undefined && object.removeAdaptorFromCatalogue !== null)
        ? CellarV25_RemoveAdaptorFromCatalogue.fromPartial(object.removeAdaptorFromCatalogue)
        : undefined;
    message.removePositionFromCatalogue =
      (object.removePositionFromCatalogue !== undefined && object.removePositionFromCatalogue !== null)
        ? CellarV25_RemovePositionFromCatalogue.fromPartial(object.removePositionFromCatalogue)
        : undefined;
    message.decreaseShareSupplyCap =
      (object.decreaseShareSupplyCap !== undefined && object.decreaseShareSupplyCap !== null)
        ? CellarV25_DecreaseShareSupplyCap.fromPartial(object.decreaseShareSupplyCap)
        : undefined;
    message.setAlternativeAssetData =
      (object.setAlternativeAssetData !== undefined && object.setAlternativeAssetData !== null)
        ? CellarV25_SetAlternativeAssetData.fromPartial(object.setAlternativeAssetData)
        : undefined;
    message.dropAlternativeAssetData =
      (object.dropAlternativeAssetData !== undefined && object.dropAlternativeAssetData !== null)
        ? CellarV25_DropAlternativeAssetData.fromPartial(object.dropAlternativeAssetData)
        : undefined;
    message.addAdaptorToCatalogue =
      (object.addAdaptorToCatalogue !== undefined && object.addAdaptorToCatalogue !== null)
        ? CellarV25_AddAdaptorToCatalogue.fromPartial(object.addAdaptorToCatalogue)
        : undefined;
    message.addPositionToCatalogue =
      (object.addPositionToCatalogue !== undefined && object.addPositionToCatalogue !== null)
        ? CellarV25_AddPositionToCatalogue.fromPartial(object.addPositionToCatalogue)
        : undefined;
    message.setRebalanceDeviation =
      (object.setRebalanceDeviation !== undefined && object.setRebalanceDeviation !== null)
        ? CellarV25_SetRebalanceDeviation.fromPartial(object.setRebalanceDeviation)
        : undefined;
    message.setStrategistPlatformCut =
      (object.setStrategistPlatformCut !== undefined && object.setStrategistPlatformCut !== null)
        ? CellarV25_SetStrategistPlatformCut.fromPartial(object.setStrategistPlatformCut)
        : undefined;
    message.setSharePriceOracle = (object.setSharePriceOracle !== undefined && object.setSharePriceOracle !== null)
      ? CellarV25_SetSharePriceOracle.fromPartial(object.setSharePriceOracle)
      : undefined;
    message.increaseShareSupplyCap =
      (object.increaseShareSupplyCap !== undefined && object.increaseShareSupplyCap !== null)
        ? CellarV25_IncreaseShareSupplyCap.fromPartial(object.increaseShareSupplyCap)
        : undefined;
    message.cachePriceRouter = (object.cachePriceRouter !== undefined && object.cachePriceRouter !== null)
      ? CellarV25_CachePriceRouter.fromPartial(object.cachePriceRouter)
      : undefined;
    return message;
  },
};

function createBaseCellarV25_AddPosition(): CellarV25_AddPosition {
  return { index: 0, positionId: 0, configurationData: new Uint8Array(0), inDebtArray: false };
}

export const CellarV25_AddPosition = {
  encode(message: CellarV25_AddPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.positionId !== 0) {
      writer.uint32(16).uint32(message.positionId);
    }
    if (message.configurationData.length !== 0) {
      writer.uint32(26).bytes(message.configurationData);
    }
    if (message.inDebtArray === true) {
      writer.uint32(32).bool(message.inDebtArray);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25_AddPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25_AddPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.index = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.positionId = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.configurationData = reader.bytes();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.inDebtArray = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25_AddPosition {
    return {
      index: isSet(object.index) ? globalThis.Number(object.index) : 0,
      positionId: isSet(object.positionId) ? globalThis.Number(object.positionId) : 0,
      configurationData: isSet(object.configurationData)
        ? bytesFromBase64(object.configurationData)
        : new Uint8Array(0),
      inDebtArray: isSet(object.inDebtArray) ? globalThis.Boolean(object.inDebtArray) : false,
    };
  },

  toJSON(message: CellarV25_AddPosition): unknown {
    const obj: any = {};
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    if (message.positionId !== 0) {
      obj.positionId = Math.round(message.positionId);
    }
    if (message.configurationData.length !== 0) {
      obj.configurationData = base64FromBytes(message.configurationData);
    }
    if (message.inDebtArray === true) {
      obj.inDebtArray = message.inDebtArray;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25_AddPosition>, I>>(base?: I): CellarV25_AddPosition {
    return CellarV25_AddPosition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25_AddPosition>, I>>(object: I): CellarV25_AddPosition {
    const message = createBaseCellarV25_AddPosition();
    message.index = object.index ?? 0;
    message.positionId = object.positionId ?? 0;
    message.configurationData = object.configurationData ?? new Uint8Array(0);
    message.inDebtArray = object.inDebtArray ?? false;
    return message;
  },
};

function createBaseCellarV25_CallOnAdaptor(): CellarV25_CallOnAdaptor {
  return { data: [] };
}

export const CellarV25_CallOnAdaptor = {
  encode(message: CellarV25_CallOnAdaptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.data) {
      AdaptorCall.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25_CallOnAdaptor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25_CallOnAdaptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data.push(AdaptorCall.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25_CallOnAdaptor {
    return { data: globalThis.Array.isArray(object?.data) ? object.data.map((e: any) => AdaptorCall.fromJSON(e)) : [] };
  },

  toJSON(message: CellarV25_CallOnAdaptor): unknown {
    const obj: any = {};
    if (message.data?.length) {
      obj.data = message.data.map((e) => AdaptorCall.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25_CallOnAdaptor>, I>>(base?: I): CellarV25_CallOnAdaptor {
    return CellarV25_CallOnAdaptor.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25_CallOnAdaptor>, I>>(object: I): CellarV25_CallOnAdaptor {
    const message = createBaseCellarV25_CallOnAdaptor();
    message.data = object.data?.map((e) => AdaptorCall.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCellarV25_RemovePosition(): CellarV25_RemovePosition {
  return { index: 0, inDebtArray: false };
}

export const CellarV25_RemovePosition = {
  encode(message: CellarV25_RemovePosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.inDebtArray === true) {
      writer.uint32(16).bool(message.inDebtArray);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25_RemovePosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25_RemovePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.index = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.inDebtArray = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25_RemovePosition {
    return {
      index: isSet(object.index) ? globalThis.Number(object.index) : 0,
      inDebtArray: isSet(object.inDebtArray) ? globalThis.Boolean(object.inDebtArray) : false,
    };
  },

  toJSON(message: CellarV25_RemovePosition): unknown {
    const obj: any = {};
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    if (message.inDebtArray === true) {
      obj.inDebtArray = message.inDebtArray;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25_RemovePosition>, I>>(base?: I): CellarV25_RemovePosition {
    return CellarV25_RemovePosition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25_RemovePosition>, I>>(object: I): CellarV25_RemovePosition {
    const message = createBaseCellarV25_RemovePosition();
    message.index = object.index ?? 0;
    message.inDebtArray = object.inDebtArray ?? false;
    return message;
  },
};

function createBaseCellarV25_SetHoldingPosition(): CellarV25_SetHoldingPosition {
  return { positionId: 0 };
}

export const CellarV25_SetHoldingPosition = {
  encode(message: CellarV25_SetHoldingPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.positionId !== 0) {
      writer.uint32(8).uint32(message.positionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25_SetHoldingPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25_SetHoldingPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.positionId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25_SetHoldingPosition {
    return { positionId: isSet(object.positionId) ? globalThis.Number(object.positionId) : 0 };
  },

  toJSON(message: CellarV25_SetHoldingPosition): unknown {
    const obj: any = {};
    if (message.positionId !== 0) {
      obj.positionId = Math.round(message.positionId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25_SetHoldingPosition>, I>>(base?: I): CellarV25_SetHoldingPosition {
    return CellarV25_SetHoldingPosition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25_SetHoldingPosition>, I>>(object: I): CellarV25_SetHoldingPosition {
    const message = createBaseCellarV25_SetHoldingPosition();
    message.positionId = object.positionId ?? 0;
    return message;
  },
};

function createBaseCellarV25_SetStrategistPayoutAddress(): CellarV25_SetStrategistPayoutAddress {
  return { payout: "" };
}

export const CellarV25_SetStrategistPayoutAddress = {
  encode(message: CellarV25_SetStrategistPayoutAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payout !== "") {
      writer.uint32(10).string(message.payout);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25_SetStrategistPayoutAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25_SetStrategistPayoutAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payout = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25_SetStrategistPayoutAddress {
    return { payout: isSet(object.payout) ? globalThis.String(object.payout) : "" };
  },

  toJSON(message: CellarV25_SetStrategistPayoutAddress): unknown {
    const obj: any = {};
    if (message.payout !== "") {
      obj.payout = message.payout;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25_SetStrategistPayoutAddress>, I>>(
    base?: I,
  ): CellarV25_SetStrategistPayoutAddress {
    return CellarV25_SetStrategistPayoutAddress.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25_SetStrategistPayoutAddress>, I>>(
    object: I,
  ): CellarV25_SetStrategistPayoutAddress {
    const message = createBaseCellarV25_SetStrategistPayoutAddress();
    message.payout = object.payout ?? "";
    return message;
  },
};

function createBaseCellarV25_SwapPositions(): CellarV25_SwapPositions {
  return { index1: 0, index2: 0, inDebtArray: false };
}

export const CellarV25_SwapPositions = {
  encode(message: CellarV25_SwapPositions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index1 !== 0) {
      writer.uint32(8).uint32(message.index1);
    }
    if (message.index2 !== 0) {
      writer.uint32(16).uint32(message.index2);
    }
    if (message.inDebtArray === true) {
      writer.uint32(24).bool(message.inDebtArray);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25_SwapPositions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25_SwapPositions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.index1 = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.index2 = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.inDebtArray = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25_SwapPositions {
    return {
      index1: isSet(object.index1) ? globalThis.Number(object.index1) : 0,
      index2: isSet(object.index2) ? globalThis.Number(object.index2) : 0,
      inDebtArray: isSet(object.inDebtArray) ? globalThis.Boolean(object.inDebtArray) : false,
    };
  },

  toJSON(message: CellarV25_SwapPositions): unknown {
    const obj: any = {};
    if (message.index1 !== 0) {
      obj.index1 = Math.round(message.index1);
    }
    if (message.index2 !== 0) {
      obj.index2 = Math.round(message.index2);
    }
    if (message.inDebtArray === true) {
      obj.inDebtArray = message.inDebtArray;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25_SwapPositions>, I>>(base?: I): CellarV25_SwapPositions {
    return CellarV25_SwapPositions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25_SwapPositions>, I>>(object: I): CellarV25_SwapPositions {
    const message = createBaseCellarV25_SwapPositions();
    message.index1 = object.index1 ?? 0;
    message.index2 = object.index2 ?? 0;
    message.inDebtArray = object.inDebtArray ?? false;
    return message;
  },
};

function createBaseCellarV25_SetShareLockPeriod(): CellarV25_SetShareLockPeriod {
  return { newLock: "" };
}

export const CellarV25_SetShareLockPeriod = {
  encode(message: CellarV25_SetShareLockPeriod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newLock !== "") {
      writer.uint32(10).string(message.newLock);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25_SetShareLockPeriod {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25_SetShareLockPeriod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.newLock = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25_SetShareLockPeriod {
    return { newLock: isSet(object.newLock) ? globalThis.String(object.newLock) : "" };
  },

  toJSON(message: CellarV25_SetShareLockPeriod): unknown {
    const obj: any = {};
    if (message.newLock !== "") {
      obj.newLock = message.newLock;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25_SetShareLockPeriod>, I>>(base?: I): CellarV25_SetShareLockPeriod {
    return CellarV25_SetShareLockPeriod.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25_SetShareLockPeriod>, I>>(object: I): CellarV25_SetShareLockPeriod {
    const message = createBaseCellarV25_SetShareLockPeriod();
    message.newLock = object.newLock ?? "";
    return message;
  },
};

function createBaseCellarV25_InitiateShutdown(): CellarV25_InitiateShutdown {
  return {};
}

export const CellarV25_InitiateShutdown = {
  encode(_: CellarV25_InitiateShutdown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25_InitiateShutdown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25_InitiateShutdown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): CellarV25_InitiateShutdown {
    return {};
  },

  toJSON(_: CellarV25_InitiateShutdown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25_InitiateShutdown>, I>>(base?: I): CellarV25_InitiateShutdown {
    return CellarV25_InitiateShutdown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25_InitiateShutdown>, I>>(_: I): CellarV25_InitiateShutdown {
    const message = createBaseCellarV25_InitiateShutdown();
    return message;
  },
};

function createBaseCellarV25_LiftShutdown(): CellarV25_LiftShutdown {
  return {};
}

export const CellarV25_LiftShutdown = {
  encode(_: CellarV25_LiftShutdown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25_LiftShutdown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25_LiftShutdown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): CellarV25_LiftShutdown {
    return {};
  },

  toJSON(_: CellarV25_LiftShutdown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25_LiftShutdown>, I>>(base?: I): CellarV25_LiftShutdown {
    return CellarV25_LiftShutdown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25_LiftShutdown>, I>>(_: I): CellarV25_LiftShutdown {
    const message = createBaseCellarV25_LiftShutdown();
    return message;
  },
};

function createBaseCellarV25_Multicall(): CellarV25_Multicall {
  return { functionCalls: [] };
}

export const CellarV25_Multicall = {
  encode(message: CellarV25_Multicall, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.functionCalls) {
      CellarV25_FunctionCall.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25_Multicall {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25_Multicall();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functionCalls.push(CellarV25_FunctionCall.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25_Multicall {
    return {
      functionCalls: globalThis.Array.isArray(object?.functionCalls)
        ? object.functionCalls.map((e: any) => CellarV25_FunctionCall.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CellarV25_Multicall): unknown {
    const obj: any = {};
    if (message.functionCalls?.length) {
      obj.functionCalls = message.functionCalls.map((e) => CellarV25_FunctionCall.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25_Multicall>, I>>(base?: I): CellarV25_Multicall {
    return CellarV25_Multicall.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25_Multicall>, I>>(object: I): CellarV25_Multicall {
    const message = createBaseCellarV25_Multicall();
    message.functionCalls = object.functionCalls?.map((e) => CellarV25_FunctionCall.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCellarV25_RemoveAdaptorFromCatalogue(): CellarV25_RemoveAdaptorFromCatalogue {
  return { adaptor: "" };
}

export const CellarV25_RemoveAdaptorFromCatalogue = {
  encode(message: CellarV25_RemoveAdaptorFromCatalogue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.adaptor !== "") {
      writer.uint32(10).string(message.adaptor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25_RemoveAdaptorFromCatalogue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25_RemoveAdaptorFromCatalogue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.adaptor = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25_RemoveAdaptorFromCatalogue {
    return { adaptor: isSet(object.adaptor) ? globalThis.String(object.adaptor) : "" };
  },

  toJSON(message: CellarV25_RemoveAdaptorFromCatalogue): unknown {
    const obj: any = {};
    if (message.adaptor !== "") {
      obj.adaptor = message.adaptor;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25_RemoveAdaptorFromCatalogue>, I>>(
    base?: I,
  ): CellarV25_RemoveAdaptorFromCatalogue {
    return CellarV25_RemoveAdaptorFromCatalogue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25_RemoveAdaptorFromCatalogue>, I>>(
    object: I,
  ): CellarV25_RemoveAdaptorFromCatalogue {
    const message = createBaseCellarV25_RemoveAdaptorFromCatalogue();
    message.adaptor = object.adaptor ?? "";
    return message;
  },
};

function createBaseCellarV25_RemovePositionFromCatalogue(): CellarV25_RemovePositionFromCatalogue {
  return { positionId: 0 };
}

export const CellarV25_RemovePositionFromCatalogue = {
  encode(message: CellarV25_RemovePositionFromCatalogue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.positionId !== 0) {
      writer.uint32(8).uint32(message.positionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25_RemovePositionFromCatalogue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25_RemovePositionFromCatalogue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.positionId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25_RemovePositionFromCatalogue {
    return { positionId: isSet(object.positionId) ? globalThis.Number(object.positionId) : 0 };
  },

  toJSON(message: CellarV25_RemovePositionFromCatalogue): unknown {
    const obj: any = {};
    if (message.positionId !== 0) {
      obj.positionId = Math.round(message.positionId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25_RemovePositionFromCatalogue>, I>>(
    base?: I,
  ): CellarV25_RemovePositionFromCatalogue {
    return CellarV25_RemovePositionFromCatalogue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25_RemovePositionFromCatalogue>, I>>(
    object: I,
  ): CellarV25_RemovePositionFromCatalogue {
    const message = createBaseCellarV25_RemovePositionFromCatalogue();
    message.positionId = object.positionId ?? 0;
    return message;
  },
};

function createBaseCellarV25_DecreaseShareSupplyCap(): CellarV25_DecreaseShareSupplyCap {
  return { newCap: "" };
}

export const CellarV25_DecreaseShareSupplyCap = {
  encode(message: CellarV25_DecreaseShareSupplyCap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newCap !== "") {
      writer.uint32(10).string(message.newCap);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25_DecreaseShareSupplyCap {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25_DecreaseShareSupplyCap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.newCap = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25_DecreaseShareSupplyCap {
    return { newCap: isSet(object.newCap) ? globalThis.String(object.newCap) : "" };
  },

  toJSON(message: CellarV25_DecreaseShareSupplyCap): unknown {
    const obj: any = {};
    if (message.newCap !== "") {
      obj.newCap = message.newCap;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25_DecreaseShareSupplyCap>, I>>(
    base?: I,
  ): CellarV25_DecreaseShareSupplyCap {
    return CellarV25_DecreaseShareSupplyCap.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25_DecreaseShareSupplyCap>, I>>(
    object: I,
  ): CellarV25_DecreaseShareSupplyCap {
    const message = createBaseCellarV25_DecreaseShareSupplyCap();
    message.newCap = object.newCap ?? "";
    return message;
  },
};

function createBaseCellarV25_SetAlternativeAssetData(): CellarV25_SetAlternativeAssetData {
  return { alternativeAsset: "", alternativeHoldingPosition: 0, alternativeAssetFee: 0 };
}

export const CellarV25_SetAlternativeAssetData = {
  encode(message: CellarV25_SetAlternativeAssetData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.alternativeAsset !== "") {
      writer.uint32(10).string(message.alternativeAsset);
    }
    if (message.alternativeHoldingPosition !== 0) {
      writer.uint32(16).uint32(message.alternativeHoldingPosition);
    }
    if (message.alternativeAssetFee !== 0) {
      writer.uint32(24).uint32(message.alternativeAssetFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25_SetAlternativeAssetData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25_SetAlternativeAssetData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.alternativeAsset = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.alternativeHoldingPosition = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.alternativeAssetFee = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25_SetAlternativeAssetData {
    return {
      alternativeAsset: isSet(object.alternativeAsset) ? globalThis.String(object.alternativeAsset) : "",
      alternativeHoldingPosition: isSet(object.alternativeHoldingPosition)
        ? globalThis.Number(object.alternativeHoldingPosition)
        : 0,
      alternativeAssetFee: isSet(object.alternativeAssetFee) ? globalThis.Number(object.alternativeAssetFee) : 0,
    };
  },

  toJSON(message: CellarV25_SetAlternativeAssetData): unknown {
    const obj: any = {};
    if (message.alternativeAsset !== "") {
      obj.alternativeAsset = message.alternativeAsset;
    }
    if (message.alternativeHoldingPosition !== 0) {
      obj.alternativeHoldingPosition = Math.round(message.alternativeHoldingPosition);
    }
    if (message.alternativeAssetFee !== 0) {
      obj.alternativeAssetFee = Math.round(message.alternativeAssetFee);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25_SetAlternativeAssetData>, I>>(
    base?: I,
  ): CellarV25_SetAlternativeAssetData {
    return CellarV25_SetAlternativeAssetData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25_SetAlternativeAssetData>, I>>(
    object: I,
  ): CellarV25_SetAlternativeAssetData {
    const message = createBaseCellarV25_SetAlternativeAssetData();
    message.alternativeAsset = object.alternativeAsset ?? "";
    message.alternativeHoldingPosition = object.alternativeHoldingPosition ?? 0;
    message.alternativeAssetFee = object.alternativeAssetFee ?? 0;
    return message;
  },
};

function createBaseCellarV25_DropAlternativeAssetData(): CellarV25_DropAlternativeAssetData {
  return { alternativeAsset: "" };
}

export const CellarV25_DropAlternativeAssetData = {
  encode(message: CellarV25_DropAlternativeAssetData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.alternativeAsset !== "") {
      writer.uint32(10).string(message.alternativeAsset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25_DropAlternativeAssetData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25_DropAlternativeAssetData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.alternativeAsset = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25_DropAlternativeAssetData {
    return { alternativeAsset: isSet(object.alternativeAsset) ? globalThis.String(object.alternativeAsset) : "" };
  },

  toJSON(message: CellarV25_DropAlternativeAssetData): unknown {
    const obj: any = {};
    if (message.alternativeAsset !== "") {
      obj.alternativeAsset = message.alternativeAsset;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25_DropAlternativeAssetData>, I>>(
    base?: I,
  ): CellarV25_DropAlternativeAssetData {
    return CellarV25_DropAlternativeAssetData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25_DropAlternativeAssetData>, I>>(
    object: I,
  ): CellarV25_DropAlternativeAssetData {
    const message = createBaseCellarV25_DropAlternativeAssetData();
    message.alternativeAsset = object.alternativeAsset ?? "";
    return message;
  },
};

function createBaseCellarV25_AddAdaptorToCatalogue(): CellarV25_AddAdaptorToCatalogue {
  return { adaptor: "" };
}

export const CellarV25_AddAdaptorToCatalogue = {
  encode(message: CellarV25_AddAdaptorToCatalogue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.adaptor !== "") {
      writer.uint32(10).string(message.adaptor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25_AddAdaptorToCatalogue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25_AddAdaptorToCatalogue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.adaptor = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25_AddAdaptorToCatalogue {
    return { adaptor: isSet(object.adaptor) ? globalThis.String(object.adaptor) : "" };
  },

  toJSON(message: CellarV25_AddAdaptorToCatalogue): unknown {
    const obj: any = {};
    if (message.adaptor !== "") {
      obj.adaptor = message.adaptor;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25_AddAdaptorToCatalogue>, I>>(base?: I): CellarV25_AddAdaptorToCatalogue {
    return CellarV25_AddAdaptorToCatalogue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25_AddAdaptorToCatalogue>, I>>(
    object: I,
  ): CellarV25_AddAdaptorToCatalogue {
    const message = createBaseCellarV25_AddAdaptorToCatalogue();
    message.adaptor = object.adaptor ?? "";
    return message;
  },
};

function createBaseCellarV25_AddPositionToCatalogue(): CellarV25_AddPositionToCatalogue {
  return { positionId: 0 };
}

export const CellarV25_AddPositionToCatalogue = {
  encode(message: CellarV25_AddPositionToCatalogue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.positionId !== 0) {
      writer.uint32(8).uint32(message.positionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25_AddPositionToCatalogue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25_AddPositionToCatalogue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.positionId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25_AddPositionToCatalogue {
    return { positionId: isSet(object.positionId) ? globalThis.Number(object.positionId) : 0 };
  },

  toJSON(message: CellarV25_AddPositionToCatalogue): unknown {
    const obj: any = {};
    if (message.positionId !== 0) {
      obj.positionId = Math.round(message.positionId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25_AddPositionToCatalogue>, I>>(
    base?: I,
  ): CellarV25_AddPositionToCatalogue {
    return CellarV25_AddPositionToCatalogue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25_AddPositionToCatalogue>, I>>(
    object: I,
  ): CellarV25_AddPositionToCatalogue {
    const message = createBaseCellarV25_AddPositionToCatalogue();
    message.positionId = object.positionId ?? 0;
    return message;
  },
};

function createBaseCellarV25_SetRebalanceDeviation(): CellarV25_SetRebalanceDeviation {
  return { newDeviation: "" };
}

export const CellarV25_SetRebalanceDeviation = {
  encode(message: CellarV25_SetRebalanceDeviation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newDeviation !== "") {
      writer.uint32(10).string(message.newDeviation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25_SetRebalanceDeviation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25_SetRebalanceDeviation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.newDeviation = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25_SetRebalanceDeviation {
    return { newDeviation: isSet(object.newDeviation) ? globalThis.String(object.newDeviation) : "" };
  },

  toJSON(message: CellarV25_SetRebalanceDeviation): unknown {
    const obj: any = {};
    if (message.newDeviation !== "") {
      obj.newDeviation = message.newDeviation;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25_SetRebalanceDeviation>, I>>(base?: I): CellarV25_SetRebalanceDeviation {
    return CellarV25_SetRebalanceDeviation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25_SetRebalanceDeviation>, I>>(
    object: I,
  ): CellarV25_SetRebalanceDeviation {
    const message = createBaseCellarV25_SetRebalanceDeviation();
    message.newDeviation = object.newDeviation ?? "";
    return message;
  },
};

function createBaseCellarV25_SetStrategistPlatformCut(): CellarV25_SetStrategistPlatformCut {
  return { newCut: 0 };
}

export const CellarV25_SetStrategistPlatformCut = {
  encode(message: CellarV25_SetStrategistPlatformCut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newCut !== 0) {
      writer.uint32(8).uint64(message.newCut);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25_SetStrategistPlatformCut {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25_SetStrategistPlatformCut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.newCut = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25_SetStrategistPlatformCut {
    return { newCut: isSet(object.newCut) ? globalThis.Number(object.newCut) : 0 };
  },

  toJSON(message: CellarV25_SetStrategistPlatformCut): unknown {
    const obj: any = {};
    if (message.newCut !== 0) {
      obj.newCut = Math.round(message.newCut);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25_SetStrategistPlatformCut>, I>>(
    base?: I,
  ): CellarV25_SetStrategistPlatformCut {
    return CellarV25_SetStrategistPlatformCut.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25_SetStrategistPlatformCut>, I>>(
    object: I,
  ): CellarV25_SetStrategistPlatformCut {
    const message = createBaseCellarV25_SetStrategistPlatformCut();
    message.newCut = object.newCut ?? 0;
    return message;
  },
};

function createBaseCellarV25_IncreaseShareSupplyCap(): CellarV25_IncreaseShareSupplyCap {
  return { newCap: "" };
}

export const CellarV25_IncreaseShareSupplyCap = {
  encode(message: CellarV25_IncreaseShareSupplyCap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newCap !== "") {
      writer.uint32(10).string(message.newCap);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25_IncreaseShareSupplyCap {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25_IncreaseShareSupplyCap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.newCap = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25_IncreaseShareSupplyCap {
    return { newCap: isSet(object.newCap) ? globalThis.String(object.newCap) : "" };
  },

  toJSON(message: CellarV25_IncreaseShareSupplyCap): unknown {
    const obj: any = {};
    if (message.newCap !== "") {
      obj.newCap = message.newCap;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25_IncreaseShareSupplyCap>, I>>(
    base?: I,
  ): CellarV25_IncreaseShareSupplyCap {
    return CellarV25_IncreaseShareSupplyCap.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25_IncreaseShareSupplyCap>, I>>(
    object: I,
  ): CellarV25_IncreaseShareSupplyCap {
    const message = createBaseCellarV25_IncreaseShareSupplyCap();
    message.newCap = object.newCap ?? "";
    return message;
  },
};

function createBaseCellarV25_SetSharePriceOracle(): CellarV25_SetSharePriceOracle {
  return { registryId: "", sharePriceOracle: "" };
}

export const CellarV25_SetSharePriceOracle = {
  encode(message: CellarV25_SetSharePriceOracle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    if (message.sharePriceOracle !== "") {
      writer.uint32(18).string(message.sharePriceOracle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25_SetSharePriceOracle {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25_SetSharePriceOracle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.registryId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sharePriceOracle = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25_SetSharePriceOracle {
    return {
      registryId: isSet(object.registryId) ? globalThis.String(object.registryId) : "",
      sharePriceOracle: isSet(object.sharePriceOracle) ? globalThis.String(object.sharePriceOracle) : "",
    };
  },

  toJSON(message: CellarV25_SetSharePriceOracle): unknown {
    const obj: any = {};
    if (message.registryId !== "") {
      obj.registryId = message.registryId;
    }
    if (message.sharePriceOracle !== "") {
      obj.sharePriceOracle = message.sharePriceOracle;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25_SetSharePriceOracle>, I>>(base?: I): CellarV25_SetSharePriceOracle {
    return CellarV25_SetSharePriceOracle.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25_SetSharePriceOracle>, I>>(
    object: I,
  ): CellarV25_SetSharePriceOracle {
    const message = createBaseCellarV25_SetSharePriceOracle();
    message.registryId = object.registryId ?? "";
    message.sharePriceOracle = object.sharePriceOracle ?? "";
    return message;
  },
};

function createBaseCellarV25_CachePriceRouter(): CellarV25_CachePriceRouter {
  return { checkTotalAssets: false, allowableRange: 0, expectedPriceRouter: "" };
}

export const CellarV25_CachePriceRouter = {
  encode(message: CellarV25_CachePriceRouter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.checkTotalAssets === true) {
      writer.uint32(8).bool(message.checkTotalAssets);
    }
    if (message.allowableRange !== 0) {
      writer.uint32(16).uint32(message.allowableRange);
    }
    if (message.expectedPriceRouter !== "") {
      writer.uint32(26).string(message.expectedPriceRouter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25_CachePriceRouter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25_CachePriceRouter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.checkTotalAssets = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.allowableRange = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.expectedPriceRouter = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25_CachePriceRouter {
    return {
      checkTotalAssets: isSet(object.checkTotalAssets) ? globalThis.Boolean(object.checkTotalAssets) : false,
      allowableRange: isSet(object.allowableRange) ? globalThis.Number(object.allowableRange) : 0,
      expectedPriceRouter: isSet(object.expectedPriceRouter) ? globalThis.String(object.expectedPriceRouter) : "",
    };
  },

  toJSON(message: CellarV25_CachePriceRouter): unknown {
    const obj: any = {};
    if (message.checkTotalAssets === true) {
      obj.checkTotalAssets = message.checkTotalAssets;
    }
    if (message.allowableRange !== 0) {
      obj.allowableRange = Math.round(message.allowableRange);
    }
    if (message.expectedPriceRouter !== "") {
      obj.expectedPriceRouter = message.expectedPriceRouter;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25_CachePriceRouter>, I>>(base?: I): CellarV25_CachePriceRouter {
    return CellarV25_CachePriceRouter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25_CachePriceRouter>, I>>(object: I): CellarV25_CachePriceRouter {
    const message = createBaseCellarV25_CachePriceRouter();
    message.checkTotalAssets = object.checkTotalAssets ?? false;
    message.allowableRange = object.allowableRange ?? 0;
    message.expectedPriceRouter = object.expectedPriceRouter ?? "";
    return message;
  },
};

function createBaseCellarV25Governance(): CellarV25Governance {
  return { functionCall: undefined, multicall: undefined };
}

export const CellarV25Governance = {
  encode(message: CellarV25Governance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionCall !== undefined) {
      CellarV25Governance_FunctionCall.encode(message.functionCall, writer.uint32(10).fork()).ldelim();
    }
    if (message.multicall !== undefined) {
      CellarV25Governance_Multicall.encode(message.multicall, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25Governance {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25Governance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functionCall = CellarV25Governance_FunctionCall.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.multicall = CellarV25Governance_Multicall.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25Governance {
    return {
      functionCall: isSet(object.functionCall)
        ? CellarV25Governance_FunctionCall.fromJSON(object.functionCall)
        : undefined,
      multicall: isSet(object.multicall) ? CellarV25Governance_Multicall.fromJSON(object.multicall) : undefined,
    };
  },

  toJSON(message: CellarV25Governance): unknown {
    const obj: any = {};
    if (message.functionCall !== undefined) {
      obj.functionCall = CellarV25Governance_FunctionCall.toJSON(message.functionCall);
    }
    if (message.multicall !== undefined) {
      obj.multicall = CellarV25Governance_Multicall.toJSON(message.multicall);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25Governance>, I>>(base?: I): CellarV25Governance {
    return CellarV25Governance.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25Governance>, I>>(object: I): CellarV25Governance {
    const message = createBaseCellarV25Governance();
    message.functionCall = (object.functionCall !== undefined && object.functionCall !== null)
      ? CellarV25Governance_FunctionCall.fromPartial(object.functionCall)
      : undefined;
    message.multicall = (object.multicall !== undefined && object.multicall !== null)
      ? CellarV25Governance_Multicall.fromPartial(object.multicall)
      : undefined;
    return message;
  },
};

function createBaseCellarV25Governance_FunctionCall(): CellarV25Governance_FunctionCall {
  return {
    addAdaptorToCatalogue: undefined,
    addPositionToCatalogue: undefined,
    setRebalanceDeviation: undefined,
    setStrategistPlatformCut: undefined,
    forcePositionOut: undefined,
    toggleIgnorePause: undefined,
    setSharePriceOracle: undefined,
    increaseShareSupplyCap: undefined,
    setAutomationActions: undefined,
    cachePriceRouter: undefined,
    initiateShutdown: undefined,
    liftShutdown: undefined,
    removeAdaptorFromCatalogue: undefined,
    removePositionFromCatalogue: undefined,
    decreaseShareSupplyCap: undefined,
    setHoldingPosition: undefined,
    addPosition: undefined,
    callOnAdaptor: undefined,
    removePosition: undefined,
  };
}

export const CellarV25Governance_FunctionCall = {
  encode(message: CellarV25Governance_FunctionCall, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addAdaptorToCatalogue !== undefined) {
      CellarV25Governance_AddAdaptorToCatalogue.encode(message.addAdaptorToCatalogue, writer.uint32(10).fork())
        .ldelim();
    }
    if (message.addPositionToCatalogue !== undefined) {
      CellarV25Governance_AddPositionToCatalogue.encode(message.addPositionToCatalogue, writer.uint32(18).fork())
        .ldelim();
    }
    if (message.setRebalanceDeviation !== undefined) {
      CellarV25Governance_SetRebalanceDeviation.encode(message.setRebalanceDeviation, writer.uint32(26).fork())
        .ldelim();
    }
    if (message.setStrategistPlatformCut !== undefined) {
      CellarV25Governance_SetStrategistPlatformCut.encode(message.setStrategistPlatformCut, writer.uint32(34).fork())
        .ldelim();
    }
    if (message.forcePositionOut !== undefined) {
      CellarV25Governance_ForcePositionOut.encode(message.forcePositionOut, writer.uint32(42).fork()).ldelim();
    }
    if (message.toggleIgnorePause !== undefined) {
      CellarV25Governance_ToggleIgnorePause.encode(message.toggleIgnorePause, writer.uint32(50).fork()).ldelim();
    }
    if (message.setSharePriceOracle !== undefined) {
      CellarV25Governance_SetSharePriceOracle.encode(message.setSharePriceOracle, writer.uint32(58).fork()).ldelim();
    }
    if (message.increaseShareSupplyCap !== undefined) {
      CellarV25Governance_IncreaseShareSupplyCap.encode(message.increaseShareSupplyCap, writer.uint32(66).fork())
        .ldelim();
    }
    if (message.setAutomationActions !== undefined) {
      CellarV25Governance_SetAutomationActions.encode(message.setAutomationActions, writer.uint32(74).fork()).ldelim();
    }
    if (message.cachePriceRouter !== undefined) {
      CellarV25Governance_CachePriceRouter.encode(message.cachePriceRouter, writer.uint32(82).fork()).ldelim();
    }
    if (message.initiateShutdown !== undefined) {
      CellarV25Governance_InitiateShutdown.encode(message.initiateShutdown, writer.uint32(90).fork()).ldelim();
    }
    if (message.liftShutdown !== undefined) {
      CellarV25Governance_LiftShutdown.encode(message.liftShutdown, writer.uint32(98).fork()).ldelim();
    }
    if (message.removeAdaptorFromCatalogue !== undefined) {
      CellarV25Governance_RemoveAdaptorFromCatalogue.encode(
        message.removeAdaptorFromCatalogue,
        writer.uint32(106).fork(),
      ).ldelim();
    }
    if (message.removePositionFromCatalogue !== undefined) {
      CellarV25Governance_RemovePositionFromCatalogue.encode(
        message.removePositionFromCatalogue,
        writer.uint32(114).fork(),
      ).ldelim();
    }
    if (message.decreaseShareSupplyCap !== undefined) {
      CellarV25Governance_DecreaseShareSupplyCap.encode(message.decreaseShareSupplyCap, writer.uint32(122).fork())
        .ldelim();
    }
    if (message.setHoldingPosition !== undefined) {
      CellarV25Governance_SetHoldingPosition.encode(message.setHoldingPosition, writer.uint32(130).fork()).ldelim();
    }
    if (message.addPosition !== undefined) {
      CellarV25Governance_AddPosition.encode(message.addPosition, writer.uint32(138).fork()).ldelim();
    }
    if (message.callOnAdaptor !== undefined) {
      CellarV25Governance_CallOnAdaptor.encode(message.callOnAdaptor, writer.uint32(146).fork()).ldelim();
    }
    if (message.removePosition !== undefined) {
      CellarV25Governance_RemovePosition.encode(message.removePosition, writer.uint32(154).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25Governance_FunctionCall {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25Governance_FunctionCall();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.addAdaptorToCatalogue = CellarV25Governance_AddAdaptorToCatalogue.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.addPositionToCatalogue = CellarV25Governance_AddPositionToCatalogue.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.setRebalanceDeviation = CellarV25Governance_SetRebalanceDeviation.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.setStrategistPlatformCut = CellarV25Governance_SetStrategistPlatformCut.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.forcePositionOut = CellarV25Governance_ForcePositionOut.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.toggleIgnorePause = CellarV25Governance_ToggleIgnorePause.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.setSharePriceOracle = CellarV25Governance_SetSharePriceOracle.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.increaseShareSupplyCap = CellarV25Governance_IncreaseShareSupplyCap.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.setAutomationActions = CellarV25Governance_SetAutomationActions.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.cachePriceRouter = CellarV25Governance_CachePriceRouter.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.initiateShutdown = CellarV25Governance_InitiateShutdown.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.liftShutdown = CellarV25Governance_LiftShutdown.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.removeAdaptorFromCatalogue = CellarV25Governance_RemoveAdaptorFromCatalogue.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.removePositionFromCatalogue = CellarV25Governance_RemovePositionFromCatalogue.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.decreaseShareSupplyCap = CellarV25Governance_DecreaseShareSupplyCap.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.setHoldingPosition = CellarV25Governance_SetHoldingPosition.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.addPosition = CellarV25Governance_AddPosition.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.callOnAdaptor = CellarV25Governance_CallOnAdaptor.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.removePosition = CellarV25Governance_RemovePosition.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25Governance_FunctionCall {
    return {
      addAdaptorToCatalogue: isSet(object.addAdaptorToCatalogue)
        ? CellarV25Governance_AddAdaptorToCatalogue.fromJSON(object.addAdaptorToCatalogue)
        : undefined,
      addPositionToCatalogue: isSet(object.addPositionToCatalogue)
        ? CellarV25Governance_AddPositionToCatalogue.fromJSON(object.addPositionToCatalogue)
        : undefined,
      setRebalanceDeviation: isSet(object.setRebalanceDeviation)
        ? CellarV25Governance_SetRebalanceDeviation.fromJSON(object.setRebalanceDeviation)
        : undefined,
      setStrategistPlatformCut: isSet(object.setStrategistPlatformCut)
        ? CellarV25Governance_SetStrategistPlatformCut.fromJSON(object.setStrategistPlatformCut)
        : undefined,
      forcePositionOut: isSet(object.forcePositionOut)
        ? CellarV25Governance_ForcePositionOut.fromJSON(object.forcePositionOut)
        : undefined,
      toggleIgnorePause: isSet(object.toggleIgnorePause)
        ? CellarV25Governance_ToggleIgnorePause.fromJSON(object.toggleIgnorePause)
        : undefined,
      setSharePriceOracle: isSet(object.setSharePriceOracle)
        ? CellarV25Governance_SetSharePriceOracle.fromJSON(object.setSharePriceOracle)
        : undefined,
      increaseShareSupplyCap: isSet(object.increaseShareSupplyCap)
        ? CellarV25Governance_IncreaseShareSupplyCap.fromJSON(object.increaseShareSupplyCap)
        : undefined,
      setAutomationActions: isSet(object.setAutomationActions)
        ? CellarV25Governance_SetAutomationActions.fromJSON(object.setAutomationActions)
        : undefined,
      cachePriceRouter: isSet(object.cachePriceRouter)
        ? CellarV25Governance_CachePriceRouter.fromJSON(object.cachePriceRouter)
        : undefined,
      initiateShutdown: isSet(object.initiateShutdown)
        ? CellarV25Governance_InitiateShutdown.fromJSON(object.initiateShutdown)
        : undefined,
      liftShutdown: isSet(object.liftShutdown)
        ? CellarV25Governance_LiftShutdown.fromJSON(object.liftShutdown)
        : undefined,
      removeAdaptorFromCatalogue: isSet(object.removeAdaptorFromCatalogue)
        ? CellarV25Governance_RemoveAdaptorFromCatalogue.fromJSON(object.removeAdaptorFromCatalogue)
        : undefined,
      removePositionFromCatalogue: isSet(object.removePositionFromCatalogue)
        ? CellarV25Governance_RemovePositionFromCatalogue.fromJSON(object.removePositionFromCatalogue)
        : undefined,
      decreaseShareSupplyCap: isSet(object.decreaseShareSupplyCap)
        ? CellarV25Governance_DecreaseShareSupplyCap.fromJSON(object.decreaseShareSupplyCap)
        : undefined,
      setHoldingPosition: isSet(object.setHoldingPosition)
        ? CellarV25Governance_SetHoldingPosition.fromJSON(object.setHoldingPosition)
        : undefined,
      addPosition: isSet(object.addPosition) ? CellarV25Governance_AddPosition.fromJSON(object.addPosition) : undefined,
      callOnAdaptor: isSet(object.callOnAdaptor)
        ? CellarV25Governance_CallOnAdaptor.fromJSON(object.callOnAdaptor)
        : undefined,
      removePosition: isSet(object.removePosition)
        ? CellarV25Governance_RemovePosition.fromJSON(object.removePosition)
        : undefined,
    };
  },

  toJSON(message: CellarV25Governance_FunctionCall): unknown {
    const obj: any = {};
    if (message.addAdaptorToCatalogue !== undefined) {
      obj.addAdaptorToCatalogue = CellarV25Governance_AddAdaptorToCatalogue.toJSON(message.addAdaptorToCatalogue);
    }
    if (message.addPositionToCatalogue !== undefined) {
      obj.addPositionToCatalogue = CellarV25Governance_AddPositionToCatalogue.toJSON(message.addPositionToCatalogue);
    }
    if (message.setRebalanceDeviation !== undefined) {
      obj.setRebalanceDeviation = CellarV25Governance_SetRebalanceDeviation.toJSON(message.setRebalanceDeviation);
    }
    if (message.setStrategistPlatformCut !== undefined) {
      obj.setStrategistPlatformCut = CellarV25Governance_SetStrategistPlatformCut.toJSON(
        message.setStrategistPlatformCut,
      );
    }
    if (message.forcePositionOut !== undefined) {
      obj.forcePositionOut = CellarV25Governance_ForcePositionOut.toJSON(message.forcePositionOut);
    }
    if (message.toggleIgnorePause !== undefined) {
      obj.toggleIgnorePause = CellarV25Governance_ToggleIgnorePause.toJSON(message.toggleIgnorePause);
    }
    if (message.setSharePriceOracle !== undefined) {
      obj.setSharePriceOracle = CellarV25Governance_SetSharePriceOracle.toJSON(message.setSharePriceOracle);
    }
    if (message.increaseShareSupplyCap !== undefined) {
      obj.increaseShareSupplyCap = CellarV25Governance_IncreaseShareSupplyCap.toJSON(message.increaseShareSupplyCap);
    }
    if (message.setAutomationActions !== undefined) {
      obj.setAutomationActions = CellarV25Governance_SetAutomationActions.toJSON(message.setAutomationActions);
    }
    if (message.cachePriceRouter !== undefined) {
      obj.cachePriceRouter = CellarV25Governance_CachePriceRouter.toJSON(message.cachePriceRouter);
    }
    if (message.initiateShutdown !== undefined) {
      obj.initiateShutdown = CellarV25Governance_InitiateShutdown.toJSON(message.initiateShutdown);
    }
    if (message.liftShutdown !== undefined) {
      obj.liftShutdown = CellarV25Governance_LiftShutdown.toJSON(message.liftShutdown);
    }
    if (message.removeAdaptorFromCatalogue !== undefined) {
      obj.removeAdaptorFromCatalogue = CellarV25Governance_RemoveAdaptorFromCatalogue.toJSON(
        message.removeAdaptorFromCatalogue,
      );
    }
    if (message.removePositionFromCatalogue !== undefined) {
      obj.removePositionFromCatalogue = CellarV25Governance_RemovePositionFromCatalogue.toJSON(
        message.removePositionFromCatalogue,
      );
    }
    if (message.decreaseShareSupplyCap !== undefined) {
      obj.decreaseShareSupplyCap = CellarV25Governance_DecreaseShareSupplyCap.toJSON(message.decreaseShareSupplyCap);
    }
    if (message.setHoldingPosition !== undefined) {
      obj.setHoldingPosition = CellarV25Governance_SetHoldingPosition.toJSON(message.setHoldingPosition);
    }
    if (message.addPosition !== undefined) {
      obj.addPosition = CellarV25Governance_AddPosition.toJSON(message.addPosition);
    }
    if (message.callOnAdaptor !== undefined) {
      obj.callOnAdaptor = CellarV25Governance_CallOnAdaptor.toJSON(message.callOnAdaptor);
    }
    if (message.removePosition !== undefined) {
      obj.removePosition = CellarV25Governance_RemovePosition.toJSON(message.removePosition);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25Governance_FunctionCall>, I>>(
    base?: I,
  ): CellarV25Governance_FunctionCall {
    return CellarV25Governance_FunctionCall.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25Governance_FunctionCall>, I>>(
    object: I,
  ): CellarV25Governance_FunctionCall {
    const message = createBaseCellarV25Governance_FunctionCall();
    message.addAdaptorToCatalogue =
      (object.addAdaptorToCatalogue !== undefined && object.addAdaptorToCatalogue !== null)
        ? CellarV25Governance_AddAdaptorToCatalogue.fromPartial(object.addAdaptorToCatalogue)
        : undefined;
    message.addPositionToCatalogue =
      (object.addPositionToCatalogue !== undefined && object.addPositionToCatalogue !== null)
        ? CellarV25Governance_AddPositionToCatalogue.fromPartial(object.addPositionToCatalogue)
        : undefined;
    message.setRebalanceDeviation =
      (object.setRebalanceDeviation !== undefined && object.setRebalanceDeviation !== null)
        ? CellarV25Governance_SetRebalanceDeviation.fromPartial(object.setRebalanceDeviation)
        : undefined;
    message.setStrategistPlatformCut =
      (object.setStrategistPlatformCut !== undefined && object.setStrategistPlatformCut !== null)
        ? CellarV25Governance_SetStrategistPlatformCut.fromPartial(object.setStrategistPlatformCut)
        : undefined;
    message.forcePositionOut = (object.forcePositionOut !== undefined && object.forcePositionOut !== null)
      ? CellarV25Governance_ForcePositionOut.fromPartial(object.forcePositionOut)
      : undefined;
    message.toggleIgnorePause = (object.toggleIgnorePause !== undefined && object.toggleIgnorePause !== null)
      ? CellarV25Governance_ToggleIgnorePause.fromPartial(object.toggleIgnorePause)
      : undefined;
    message.setSharePriceOracle = (object.setSharePriceOracle !== undefined && object.setSharePriceOracle !== null)
      ? CellarV25Governance_SetSharePriceOracle.fromPartial(object.setSharePriceOracle)
      : undefined;
    message.increaseShareSupplyCap =
      (object.increaseShareSupplyCap !== undefined && object.increaseShareSupplyCap !== null)
        ? CellarV25Governance_IncreaseShareSupplyCap.fromPartial(object.increaseShareSupplyCap)
        : undefined;
    message.setAutomationActions = (object.setAutomationActions !== undefined && object.setAutomationActions !== null)
      ? CellarV25Governance_SetAutomationActions.fromPartial(object.setAutomationActions)
      : undefined;
    message.cachePriceRouter = (object.cachePriceRouter !== undefined && object.cachePriceRouter !== null)
      ? CellarV25Governance_CachePriceRouter.fromPartial(object.cachePriceRouter)
      : undefined;
    message.initiateShutdown = (object.initiateShutdown !== undefined && object.initiateShutdown !== null)
      ? CellarV25Governance_InitiateShutdown.fromPartial(object.initiateShutdown)
      : undefined;
    message.liftShutdown = (object.liftShutdown !== undefined && object.liftShutdown !== null)
      ? CellarV25Governance_LiftShutdown.fromPartial(object.liftShutdown)
      : undefined;
    message.removeAdaptorFromCatalogue =
      (object.removeAdaptorFromCatalogue !== undefined && object.removeAdaptorFromCatalogue !== null)
        ? CellarV25Governance_RemoveAdaptorFromCatalogue.fromPartial(object.removeAdaptorFromCatalogue)
        : undefined;
    message.removePositionFromCatalogue =
      (object.removePositionFromCatalogue !== undefined && object.removePositionFromCatalogue !== null)
        ? CellarV25Governance_RemovePositionFromCatalogue.fromPartial(object.removePositionFromCatalogue)
        : undefined;
    message.decreaseShareSupplyCap =
      (object.decreaseShareSupplyCap !== undefined && object.decreaseShareSupplyCap !== null)
        ? CellarV25Governance_DecreaseShareSupplyCap.fromPartial(object.decreaseShareSupplyCap)
        : undefined;
    message.setHoldingPosition = (object.setHoldingPosition !== undefined && object.setHoldingPosition !== null)
      ? CellarV25Governance_SetHoldingPosition.fromPartial(object.setHoldingPosition)
      : undefined;
    message.addPosition = (object.addPosition !== undefined && object.addPosition !== null)
      ? CellarV25Governance_AddPosition.fromPartial(object.addPosition)
      : undefined;
    message.callOnAdaptor = (object.callOnAdaptor !== undefined && object.callOnAdaptor !== null)
      ? CellarV25Governance_CallOnAdaptor.fromPartial(object.callOnAdaptor)
      : undefined;
    message.removePosition = (object.removePosition !== undefined && object.removePosition !== null)
      ? CellarV25Governance_RemovePosition.fromPartial(object.removePosition)
      : undefined;
    return message;
  },
};

function createBaseCellarV25Governance_Multicall(): CellarV25Governance_Multicall {
  return { functionCalls: [] };
}

export const CellarV25Governance_Multicall = {
  encode(message: CellarV25Governance_Multicall, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.functionCalls) {
      CellarV25Governance_FunctionCall.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25Governance_Multicall {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25Governance_Multicall();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functionCalls.push(CellarV25Governance_FunctionCall.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25Governance_Multicall {
    return {
      functionCalls: globalThis.Array.isArray(object?.functionCalls)
        ? object.functionCalls.map((e: any) => CellarV25Governance_FunctionCall.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CellarV25Governance_Multicall): unknown {
    const obj: any = {};
    if (message.functionCalls?.length) {
      obj.functionCalls = message.functionCalls.map((e) => CellarV25Governance_FunctionCall.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25Governance_Multicall>, I>>(base?: I): CellarV25Governance_Multicall {
    return CellarV25Governance_Multicall.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25Governance_Multicall>, I>>(
    object: I,
  ): CellarV25Governance_Multicall {
    const message = createBaseCellarV25Governance_Multicall();
    message.functionCalls = object.functionCalls?.map((e) => CellarV25Governance_FunctionCall.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCellarV25Governance_AddAdaptorToCatalogue(): CellarV25Governance_AddAdaptorToCatalogue {
  return { adaptor: "" };
}

export const CellarV25Governance_AddAdaptorToCatalogue = {
  encode(message: CellarV25Governance_AddAdaptorToCatalogue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.adaptor !== "") {
      writer.uint32(10).string(message.adaptor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25Governance_AddAdaptorToCatalogue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25Governance_AddAdaptorToCatalogue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.adaptor = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25Governance_AddAdaptorToCatalogue {
    return { adaptor: isSet(object.adaptor) ? globalThis.String(object.adaptor) : "" };
  },

  toJSON(message: CellarV25Governance_AddAdaptorToCatalogue): unknown {
    const obj: any = {};
    if (message.adaptor !== "") {
      obj.adaptor = message.adaptor;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25Governance_AddAdaptorToCatalogue>, I>>(
    base?: I,
  ): CellarV25Governance_AddAdaptorToCatalogue {
    return CellarV25Governance_AddAdaptorToCatalogue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25Governance_AddAdaptorToCatalogue>, I>>(
    object: I,
  ): CellarV25Governance_AddAdaptorToCatalogue {
    const message = createBaseCellarV25Governance_AddAdaptorToCatalogue();
    message.adaptor = object.adaptor ?? "";
    return message;
  },
};

function createBaseCellarV25Governance_AddPositionToCatalogue(): CellarV25Governance_AddPositionToCatalogue {
  return { positionId: 0 };
}

export const CellarV25Governance_AddPositionToCatalogue = {
  encode(message: CellarV25Governance_AddPositionToCatalogue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.positionId !== 0) {
      writer.uint32(8).uint32(message.positionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25Governance_AddPositionToCatalogue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25Governance_AddPositionToCatalogue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.positionId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25Governance_AddPositionToCatalogue {
    return { positionId: isSet(object.positionId) ? globalThis.Number(object.positionId) : 0 };
  },

  toJSON(message: CellarV25Governance_AddPositionToCatalogue): unknown {
    const obj: any = {};
    if (message.positionId !== 0) {
      obj.positionId = Math.round(message.positionId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25Governance_AddPositionToCatalogue>, I>>(
    base?: I,
  ): CellarV25Governance_AddPositionToCatalogue {
    return CellarV25Governance_AddPositionToCatalogue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25Governance_AddPositionToCatalogue>, I>>(
    object: I,
  ): CellarV25Governance_AddPositionToCatalogue {
    const message = createBaseCellarV25Governance_AddPositionToCatalogue();
    message.positionId = object.positionId ?? 0;
    return message;
  },
};

function createBaseCellarV25Governance_SetRebalanceDeviation(): CellarV25Governance_SetRebalanceDeviation {
  return { newDeviation: "" };
}

export const CellarV25Governance_SetRebalanceDeviation = {
  encode(message: CellarV25Governance_SetRebalanceDeviation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newDeviation !== "") {
      writer.uint32(10).string(message.newDeviation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25Governance_SetRebalanceDeviation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25Governance_SetRebalanceDeviation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.newDeviation = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25Governance_SetRebalanceDeviation {
    return { newDeviation: isSet(object.newDeviation) ? globalThis.String(object.newDeviation) : "" };
  },

  toJSON(message: CellarV25Governance_SetRebalanceDeviation): unknown {
    const obj: any = {};
    if (message.newDeviation !== "") {
      obj.newDeviation = message.newDeviation;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25Governance_SetRebalanceDeviation>, I>>(
    base?: I,
  ): CellarV25Governance_SetRebalanceDeviation {
    return CellarV25Governance_SetRebalanceDeviation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25Governance_SetRebalanceDeviation>, I>>(
    object: I,
  ): CellarV25Governance_SetRebalanceDeviation {
    const message = createBaseCellarV25Governance_SetRebalanceDeviation();
    message.newDeviation = object.newDeviation ?? "";
    return message;
  },
};

function createBaseCellarV25Governance_SetStrategistPlatformCut(): CellarV25Governance_SetStrategistPlatformCut {
  return { newCut: 0 };
}

export const CellarV25Governance_SetStrategistPlatformCut = {
  encode(message: CellarV25Governance_SetStrategistPlatformCut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newCut !== 0) {
      writer.uint32(8).uint64(message.newCut);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25Governance_SetStrategistPlatformCut {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25Governance_SetStrategistPlatformCut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.newCut = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25Governance_SetStrategistPlatformCut {
    return { newCut: isSet(object.newCut) ? globalThis.Number(object.newCut) : 0 };
  },

  toJSON(message: CellarV25Governance_SetStrategistPlatformCut): unknown {
    const obj: any = {};
    if (message.newCut !== 0) {
      obj.newCut = Math.round(message.newCut);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25Governance_SetStrategistPlatformCut>, I>>(
    base?: I,
  ): CellarV25Governance_SetStrategistPlatformCut {
    return CellarV25Governance_SetStrategistPlatformCut.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25Governance_SetStrategistPlatformCut>, I>>(
    object: I,
  ): CellarV25Governance_SetStrategistPlatformCut {
    const message = createBaseCellarV25Governance_SetStrategistPlatformCut();
    message.newCut = object.newCut ?? 0;
    return message;
  },
};

function createBaseCellarV25Governance_ForcePositionOut(): CellarV25Governance_ForcePositionOut {
  return { index: 0, positionId: 0, inDebtArray: false };
}

export const CellarV25Governance_ForcePositionOut = {
  encode(message: CellarV25Governance_ForcePositionOut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.positionId !== 0) {
      writer.uint32(16).uint32(message.positionId);
    }
    if (message.inDebtArray === true) {
      writer.uint32(24).bool(message.inDebtArray);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25Governance_ForcePositionOut {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25Governance_ForcePositionOut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.index = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.positionId = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.inDebtArray = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25Governance_ForcePositionOut {
    return {
      index: isSet(object.index) ? globalThis.Number(object.index) : 0,
      positionId: isSet(object.positionId) ? globalThis.Number(object.positionId) : 0,
      inDebtArray: isSet(object.inDebtArray) ? globalThis.Boolean(object.inDebtArray) : false,
    };
  },

  toJSON(message: CellarV25Governance_ForcePositionOut): unknown {
    const obj: any = {};
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    if (message.positionId !== 0) {
      obj.positionId = Math.round(message.positionId);
    }
    if (message.inDebtArray === true) {
      obj.inDebtArray = message.inDebtArray;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25Governance_ForcePositionOut>, I>>(
    base?: I,
  ): CellarV25Governance_ForcePositionOut {
    return CellarV25Governance_ForcePositionOut.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25Governance_ForcePositionOut>, I>>(
    object: I,
  ): CellarV25Governance_ForcePositionOut {
    const message = createBaseCellarV25Governance_ForcePositionOut();
    message.index = object.index ?? 0;
    message.positionId = object.positionId ?? 0;
    message.inDebtArray = object.inDebtArray ?? false;
    return message;
  },
};

function createBaseCellarV25Governance_ToggleIgnorePause(): CellarV25Governance_ToggleIgnorePause {
  return {};
}

export const CellarV25Governance_ToggleIgnorePause = {
  encode(_: CellarV25Governance_ToggleIgnorePause, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25Governance_ToggleIgnorePause {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25Governance_ToggleIgnorePause();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): CellarV25Governance_ToggleIgnorePause {
    return {};
  },

  toJSON(_: CellarV25Governance_ToggleIgnorePause): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25Governance_ToggleIgnorePause>, I>>(
    base?: I,
  ): CellarV25Governance_ToggleIgnorePause {
    return CellarV25Governance_ToggleIgnorePause.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25Governance_ToggleIgnorePause>, I>>(
    _: I,
  ): CellarV25Governance_ToggleIgnorePause {
    const message = createBaseCellarV25Governance_ToggleIgnorePause();
    return message;
  },
};

function createBaseCellarV25Governance_SetAutomationActions(): CellarV25Governance_SetAutomationActions {
  return { registryId: "", expectedAutomationActions: "" };
}

export const CellarV25Governance_SetAutomationActions = {
  encode(message: CellarV25Governance_SetAutomationActions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    if (message.expectedAutomationActions !== "") {
      writer.uint32(18).string(message.expectedAutomationActions);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25Governance_SetAutomationActions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25Governance_SetAutomationActions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.registryId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.expectedAutomationActions = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25Governance_SetAutomationActions {
    return {
      registryId: isSet(object.registryId) ? globalThis.String(object.registryId) : "",
      expectedAutomationActions: isSet(object.expectedAutomationActions)
        ? globalThis.String(object.expectedAutomationActions)
        : "",
    };
  },

  toJSON(message: CellarV25Governance_SetAutomationActions): unknown {
    const obj: any = {};
    if (message.registryId !== "") {
      obj.registryId = message.registryId;
    }
    if (message.expectedAutomationActions !== "") {
      obj.expectedAutomationActions = message.expectedAutomationActions;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25Governance_SetAutomationActions>, I>>(
    base?: I,
  ): CellarV25Governance_SetAutomationActions {
    return CellarV25Governance_SetAutomationActions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25Governance_SetAutomationActions>, I>>(
    object: I,
  ): CellarV25Governance_SetAutomationActions {
    const message = createBaseCellarV25Governance_SetAutomationActions();
    message.registryId = object.registryId ?? "";
    message.expectedAutomationActions = object.expectedAutomationActions ?? "";
    return message;
  },
};

function createBaseCellarV25Governance_IncreaseShareSupplyCap(): CellarV25Governance_IncreaseShareSupplyCap {
  return { newCap: "" };
}

export const CellarV25Governance_IncreaseShareSupplyCap = {
  encode(message: CellarV25Governance_IncreaseShareSupplyCap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newCap !== "") {
      writer.uint32(10).string(message.newCap);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25Governance_IncreaseShareSupplyCap {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25Governance_IncreaseShareSupplyCap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.newCap = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25Governance_IncreaseShareSupplyCap {
    return { newCap: isSet(object.newCap) ? globalThis.String(object.newCap) : "" };
  },

  toJSON(message: CellarV25Governance_IncreaseShareSupplyCap): unknown {
    const obj: any = {};
    if (message.newCap !== "") {
      obj.newCap = message.newCap;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25Governance_IncreaseShareSupplyCap>, I>>(
    base?: I,
  ): CellarV25Governance_IncreaseShareSupplyCap {
    return CellarV25Governance_IncreaseShareSupplyCap.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25Governance_IncreaseShareSupplyCap>, I>>(
    object: I,
  ): CellarV25Governance_IncreaseShareSupplyCap {
    const message = createBaseCellarV25Governance_IncreaseShareSupplyCap();
    message.newCap = object.newCap ?? "";
    return message;
  },
};

function createBaseCellarV25Governance_SetSharePriceOracle(): CellarV25Governance_SetSharePriceOracle {
  return { registryId: "", sharePriceOracle: "" };
}

export const CellarV25Governance_SetSharePriceOracle = {
  encode(message: CellarV25Governance_SetSharePriceOracle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    if (message.sharePriceOracle !== "") {
      writer.uint32(18).string(message.sharePriceOracle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25Governance_SetSharePriceOracle {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25Governance_SetSharePriceOracle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.registryId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sharePriceOracle = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25Governance_SetSharePriceOracle {
    return {
      registryId: isSet(object.registryId) ? globalThis.String(object.registryId) : "",
      sharePriceOracle: isSet(object.sharePriceOracle) ? globalThis.String(object.sharePriceOracle) : "",
    };
  },

  toJSON(message: CellarV25Governance_SetSharePriceOracle): unknown {
    const obj: any = {};
    if (message.registryId !== "") {
      obj.registryId = message.registryId;
    }
    if (message.sharePriceOracle !== "") {
      obj.sharePriceOracle = message.sharePriceOracle;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25Governance_SetSharePriceOracle>, I>>(
    base?: I,
  ): CellarV25Governance_SetSharePriceOracle {
    return CellarV25Governance_SetSharePriceOracle.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25Governance_SetSharePriceOracle>, I>>(
    object: I,
  ): CellarV25Governance_SetSharePriceOracle {
    const message = createBaseCellarV25Governance_SetSharePriceOracle();
    message.registryId = object.registryId ?? "";
    message.sharePriceOracle = object.sharePriceOracle ?? "";
    return message;
  },
};

function createBaseCellarV25Governance_CachePriceRouter(): CellarV25Governance_CachePriceRouter {
  return { checkTotalAssets: false, allowableRange: 0, expectedPriceRouter: "" };
}

export const CellarV25Governance_CachePriceRouter = {
  encode(message: CellarV25Governance_CachePriceRouter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.checkTotalAssets === true) {
      writer.uint32(8).bool(message.checkTotalAssets);
    }
    if (message.allowableRange !== 0) {
      writer.uint32(16).uint32(message.allowableRange);
    }
    if (message.expectedPriceRouter !== "") {
      writer.uint32(26).string(message.expectedPriceRouter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25Governance_CachePriceRouter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25Governance_CachePriceRouter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.checkTotalAssets = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.allowableRange = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.expectedPriceRouter = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25Governance_CachePriceRouter {
    return {
      checkTotalAssets: isSet(object.checkTotalAssets) ? globalThis.Boolean(object.checkTotalAssets) : false,
      allowableRange: isSet(object.allowableRange) ? globalThis.Number(object.allowableRange) : 0,
      expectedPriceRouter: isSet(object.expectedPriceRouter) ? globalThis.String(object.expectedPriceRouter) : "",
    };
  },

  toJSON(message: CellarV25Governance_CachePriceRouter): unknown {
    const obj: any = {};
    if (message.checkTotalAssets === true) {
      obj.checkTotalAssets = message.checkTotalAssets;
    }
    if (message.allowableRange !== 0) {
      obj.allowableRange = Math.round(message.allowableRange);
    }
    if (message.expectedPriceRouter !== "") {
      obj.expectedPriceRouter = message.expectedPriceRouter;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25Governance_CachePriceRouter>, I>>(
    base?: I,
  ): CellarV25Governance_CachePriceRouter {
    return CellarV25Governance_CachePriceRouter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25Governance_CachePriceRouter>, I>>(
    object: I,
  ): CellarV25Governance_CachePriceRouter {
    const message = createBaseCellarV25Governance_CachePriceRouter();
    message.checkTotalAssets = object.checkTotalAssets ?? false;
    message.allowableRange = object.allowableRange ?? 0;
    message.expectedPriceRouter = object.expectedPriceRouter ?? "";
    return message;
  },
};

function createBaseCellarV25Governance_InitiateShutdown(): CellarV25Governance_InitiateShutdown {
  return {};
}

export const CellarV25Governance_InitiateShutdown = {
  encode(_: CellarV25Governance_InitiateShutdown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25Governance_InitiateShutdown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25Governance_InitiateShutdown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): CellarV25Governance_InitiateShutdown {
    return {};
  },

  toJSON(_: CellarV25Governance_InitiateShutdown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25Governance_InitiateShutdown>, I>>(
    base?: I,
  ): CellarV25Governance_InitiateShutdown {
    return CellarV25Governance_InitiateShutdown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25Governance_InitiateShutdown>, I>>(
    _: I,
  ): CellarV25Governance_InitiateShutdown {
    const message = createBaseCellarV25Governance_InitiateShutdown();
    return message;
  },
};

function createBaseCellarV25Governance_LiftShutdown(): CellarV25Governance_LiftShutdown {
  return {};
}

export const CellarV25Governance_LiftShutdown = {
  encode(_: CellarV25Governance_LiftShutdown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25Governance_LiftShutdown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25Governance_LiftShutdown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): CellarV25Governance_LiftShutdown {
    return {};
  },

  toJSON(_: CellarV25Governance_LiftShutdown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25Governance_LiftShutdown>, I>>(
    base?: I,
  ): CellarV25Governance_LiftShutdown {
    return CellarV25Governance_LiftShutdown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25Governance_LiftShutdown>, I>>(
    _: I,
  ): CellarV25Governance_LiftShutdown {
    const message = createBaseCellarV25Governance_LiftShutdown();
    return message;
  },
};

function createBaseCellarV25Governance_RemoveAdaptorFromCatalogue(): CellarV25Governance_RemoveAdaptorFromCatalogue {
  return { adaptor: "" };
}

export const CellarV25Governance_RemoveAdaptorFromCatalogue = {
  encode(
    message: CellarV25Governance_RemoveAdaptorFromCatalogue,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.adaptor !== "") {
      writer.uint32(10).string(message.adaptor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25Governance_RemoveAdaptorFromCatalogue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25Governance_RemoveAdaptorFromCatalogue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.adaptor = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25Governance_RemoveAdaptorFromCatalogue {
    return { adaptor: isSet(object.adaptor) ? globalThis.String(object.adaptor) : "" };
  },

  toJSON(message: CellarV25Governance_RemoveAdaptorFromCatalogue): unknown {
    const obj: any = {};
    if (message.adaptor !== "") {
      obj.adaptor = message.adaptor;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25Governance_RemoveAdaptorFromCatalogue>, I>>(
    base?: I,
  ): CellarV25Governance_RemoveAdaptorFromCatalogue {
    return CellarV25Governance_RemoveAdaptorFromCatalogue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25Governance_RemoveAdaptorFromCatalogue>, I>>(
    object: I,
  ): CellarV25Governance_RemoveAdaptorFromCatalogue {
    const message = createBaseCellarV25Governance_RemoveAdaptorFromCatalogue();
    message.adaptor = object.adaptor ?? "";
    return message;
  },
};

function createBaseCellarV25Governance_RemovePositionFromCatalogue(): CellarV25Governance_RemovePositionFromCatalogue {
  return { positionId: 0 };
}

export const CellarV25Governance_RemovePositionFromCatalogue = {
  encode(
    message: CellarV25Governance_RemovePositionFromCatalogue,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.positionId !== 0) {
      writer.uint32(8).uint32(message.positionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25Governance_RemovePositionFromCatalogue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25Governance_RemovePositionFromCatalogue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.positionId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25Governance_RemovePositionFromCatalogue {
    return { positionId: isSet(object.positionId) ? globalThis.Number(object.positionId) : 0 };
  },

  toJSON(message: CellarV25Governance_RemovePositionFromCatalogue): unknown {
    const obj: any = {};
    if (message.positionId !== 0) {
      obj.positionId = Math.round(message.positionId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25Governance_RemovePositionFromCatalogue>, I>>(
    base?: I,
  ): CellarV25Governance_RemovePositionFromCatalogue {
    return CellarV25Governance_RemovePositionFromCatalogue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25Governance_RemovePositionFromCatalogue>, I>>(
    object: I,
  ): CellarV25Governance_RemovePositionFromCatalogue {
    const message = createBaseCellarV25Governance_RemovePositionFromCatalogue();
    message.positionId = object.positionId ?? 0;
    return message;
  },
};

function createBaseCellarV25Governance_DecreaseShareSupplyCap(): CellarV25Governance_DecreaseShareSupplyCap {
  return { newCap: "" };
}

export const CellarV25Governance_DecreaseShareSupplyCap = {
  encode(message: CellarV25Governance_DecreaseShareSupplyCap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newCap !== "") {
      writer.uint32(10).string(message.newCap);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25Governance_DecreaseShareSupplyCap {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25Governance_DecreaseShareSupplyCap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.newCap = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25Governance_DecreaseShareSupplyCap {
    return { newCap: isSet(object.newCap) ? globalThis.String(object.newCap) : "" };
  },

  toJSON(message: CellarV25Governance_DecreaseShareSupplyCap): unknown {
    const obj: any = {};
    if (message.newCap !== "") {
      obj.newCap = message.newCap;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25Governance_DecreaseShareSupplyCap>, I>>(
    base?: I,
  ): CellarV25Governance_DecreaseShareSupplyCap {
    return CellarV25Governance_DecreaseShareSupplyCap.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25Governance_DecreaseShareSupplyCap>, I>>(
    object: I,
  ): CellarV25Governance_DecreaseShareSupplyCap {
    const message = createBaseCellarV25Governance_DecreaseShareSupplyCap();
    message.newCap = object.newCap ?? "";
    return message;
  },
};

function createBaseCellarV25Governance_SetHoldingPosition(): CellarV25Governance_SetHoldingPosition {
  return { positionId: 0 };
}

export const CellarV25Governance_SetHoldingPosition = {
  encode(message: CellarV25Governance_SetHoldingPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.positionId !== 0) {
      writer.uint32(8).uint32(message.positionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25Governance_SetHoldingPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25Governance_SetHoldingPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.positionId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25Governance_SetHoldingPosition {
    return { positionId: isSet(object.positionId) ? globalThis.Number(object.positionId) : 0 };
  },

  toJSON(message: CellarV25Governance_SetHoldingPosition): unknown {
    const obj: any = {};
    if (message.positionId !== 0) {
      obj.positionId = Math.round(message.positionId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25Governance_SetHoldingPosition>, I>>(
    base?: I,
  ): CellarV25Governance_SetHoldingPosition {
    return CellarV25Governance_SetHoldingPosition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25Governance_SetHoldingPosition>, I>>(
    object: I,
  ): CellarV25Governance_SetHoldingPosition {
    const message = createBaseCellarV25Governance_SetHoldingPosition();
    message.positionId = object.positionId ?? 0;
    return message;
  },
};

function createBaseCellarV25Governance_AddPosition(): CellarV25Governance_AddPosition {
  return { index: 0, positionId: 0, configurationData: new Uint8Array(0), inDebtArray: false };
}

export const CellarV25Governance_AddPosition = {
  encode(message: CellarV25Governance_AddPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.positionId !== 0) {
      writer.uint32(16).uint32(message.positionId);
    }
    if (message.configurationData.length !== 0) {
      writer.uint32(26).bytes(message.configurationData);
    }
    if (message.inDebtArray === true) {
      writer.uint32(32).bool(message.inDebtArray);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25Governance_AddPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25Governance_AddPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.index = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.positionId = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.configurationData = reader.bytes();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.inDebtArray = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25Governance_AddPosition {
    return {
      index: isSet(object.index) ? globalThis.Number(object.index) : 0,
      positionId: isSet(object.positionId) ? globalThis.Number(object.positionId) : 0,
      configurationData: isSet(object.configurationData)
        ? bytesFromBase64(object.configurationData)
        : new Uint8Array(0),
      inDebtArray: isSet(object.inDebtArray) ? globalThis.Boolean(object.inDebtArray) : false,
    };
  },

  toJSON(message: CellarV25Governance_AddPosition): unknown {
    const obj: any = {};
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    if (message.positionId !== 0) {
      obj.positionId = Math.round(message.positionId);
    }
    if (message.configurationData.length !== 0) {
      obj.configurationData = base64FromBytes(message.configurationData);
    }
    if (message.inDebtArray === true) {
      obj.inDebtArray = message.inDebtArray;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25Governance_AddPosition>, I>>(base?: I): CellarV25Governance_AddPosition {
    return CellarV25Governance_AddPosition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25Governance_AddPosition>, I>>(
    object: I,
  ): CellarV25Governance_AddPosition {
    const message = createBaseCellarV25Governance_AddPosition();
    message.index = object.index ?? 0;
    message.positionId = object.positionId ?? 0;
    message.configurationData = object.configurationData ?? new Uint8Array(0);
    message.inDebtArray = object.inDebtArray ?? false;
    return message;
  },
};

function createBaseCellarV25Governance_CallOnAdaptor(): CellarV25Governance_CallOnAdaptor {
  return { data: [] };
}

export const CellarV25Governance_CallOnAdaptor = {
  encode(message: CellarV25Governance_CallOnAdaptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.data) {
      AdaptorCall.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25Governance_CallOnAdaptor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25Governance_CallOnAdaptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data.push(AdaptorCall.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25Governance_CallOnAdaptor {
    return { data: globalThis.Array.isArray(object?.data) ? object.data.map((e: any) => AdaptorCall.fromJSON(e)) : [] };
  },

  toJSON(message: CellarV25Governance_CallOnAdaptor): unknown {
    const obj: any = {};
    if (message.data?.length) {
      obj.data = message.data.map((e) => AdaptorCall.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25Governance_CallOnAdaptor>, I>>(
    base?: I,
  ): CellarV25Governance_CallOnAdaptor {
    return CellarV25Governance_CallOnAdaptor.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25Governance_CallOnAdaptor>, I>>(
    object: I,
  ): CellarV25Governance_CallOnAdaptor {
    const message = createBaseCellarV25Governance_CallOnAdaptor();
    message.data = object.data?.map((e) => AdaptorCall.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCellarV25Governance_RemovePosition(): CellarV25Governance_RemovePosition {
  return { index: 0, inDebtArray: false };
}

export const CellarV25Governance_RemovePosition = {
  encode(message: CellarV25Governance_RemovePosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.inDebtArray === true) {
      writer.uint32(16).bool(message.inDebtArray);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CellarV25Governance_RemovePosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCellarV25Governance_RemovePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.index = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.inDebtArray = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CellarV25Governance_RemovePosition {
    return {
      index: isSet(object.index) ? globalThis.Number(object.index) : 0,
      inDebtArray: isSet(object.inDebtArray) ? globalThis.Boolean(object.inDebtArray) : false,
    };
  },

  toJSON(message: CellarV25Governance_RemovePosition): unknown {
    const obj: any = {};
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    if (message.inDebtArray === true) {
      obj.inDebtArray = message.inDebtArray;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CellarV25Governance_RemovePosition>, I>>(
    base?: I,
  ): CellarV25Governance_RemovePosition {
    return CellarV25Governance_RemovePosition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CellarV25Governance_RemovePosition>, I>>(
    object: I,
  ): CellarV25Governance_RemovePosition {
    const message = createBaseCellarV25Governance_RemovePosition();
    message.index = object.index ?? 0;
    message.inDebtArray = object.inDebtArray ?? false;
    return message;
  },
};

function createBaseAdaptorCall(): AdaptorCall {
  return {
    adaptor: "",
    aaveATokenV1Calls: undefined,
    aaveDebtTokenV1Calls: undefined,
    compoundCTokenV2Calls: undefined,
    aaveATokenV2Calls: undefined,
    aaveDebtTokenV2Calls: undefined,
    aaveV3ATokenV1Calls: undefined,
    aaveV3DebtTokenV1Calls: undefined,
    oneInchV1Calls: undefined,
    feesAndReservesV1Calls: undefined,
    zeroXV1Calls: undefined,
    swapWithUniswapV1Calls: undefined,
    vestingSimpleV2Calls: undefined,
    cellarV1Calls: undefined,
    uniswapV3V2Calls: undefined,
    aaveV2EnableAssetAsCollateralV1Calls: undefined,
    fTokenV1Calls: undefined,
    morphoAaveV2ATokenV1Calls: undefined,
    morphoAaveV2DebtTokenV1Calls: undefined,
    morphoAaveV3ATokenCollateralV1Calls: undefined,
    morphoAaveV3ATokenP2pV1Calls: undefined,
    morphoAaveV3DebtTokenV1Calls: undefined,
    balancerPoolV1Calls: undefined,
    legacyCellarV1Calls: undefined,
    debtFTokenV1Calls: undefined,
    collateralFTokenV1Calls: undefined,
    aaveV3DebtTokenV1FlashLoanCalls: undefined,
    balancerPoolV1FlashLoanCalls: undefined,
    convexCurveV1Calls: undefined,
    curveV1Calls: undefined,
    auraErc4626V1Calls: undefined,
    morphoBlueCollateralV1Calls: undefined,
    morphoBlueDebtV1Calls: undefined,
    morphoBlueSupplyV1Calls: undefined,
    erc4626V1Calls: undefined,
    stakingV1Calls: undefined,
  };
}

export const AdaptorCall = {
  encode(message: AdaptorCall, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.adaptor !== "") {
      writer.uint32(10).string(message.adaptor);
    }
    if (message.aaveATokenV1Calls !== undefined) {
      AaveATokenAdaptorV1Calls.encode(message.aaveATokenV1Calls, writer.uint32(18).fork()).ldelim();
    }
    if (message.aaveDebtTokenV1Calls !== undefined) {
      AaveDebtTokenAdaptorV1Calls.encode(message.aaveDebtTokenV1Calls, writer.uint32(26).fork()).ldelim();
    }
    if (message.compoundCTokenV2Calls !== undefined) {
      CompoundCTokenAdaptorV2Calls.encode(message.compoundCTokenV2Calls, writer.uint32(34).fork()).ldelim();
    }
    if (message.aaveATokenV2Calls !== undefined) {
      AaveATokenAdaptorV2Calls.encode(message.aaveATokenV2Calls, writer.uint32(42).fork()).ldelim();
    }
    if (message.aaveDebtTokenV2Calls !== undefined) {
      AaveDebtTokenAdaptorV2Calls.encode(message.aaveDebtTokenV2Calls, writer.uint32(50).fork()).ldelim();
    }
    if (message.aaveV3ATokenV1Calls !== undefined) {
      AaveV3ATokenAdaptorV1Calls.encode(message.aaveV3ATokenV1Calls, writer.uint32(58).fork()).ldelim();
    }
    if (message.aaveV3DebtTokenV1Calls !== undefined) {
      AaveV3DebtTokenAdaptorV1Calls.encode(message.aaveV3DebtTokenV1Calls, writer.uint32(66).fork()).ldelim();
    }
    if (message.oneInchV1Calls !== undefined) {
      OneInchAdaptorV1Calls.encode(message.oneInchV1Calls, writer.uint32(74).fork()).ldelim();
    }
    if (message.feesAndReservesV1Calls !== undefined) {
      FeesAndReservesAdaptorV1Calls.encode(message.feesAndReservesV1Calls, writer.uint32(82).fork()).ldelim();
    }
    if (message.zeroXV1Calls !== undefined) {
      ZeroXAdaptorV1Calls.encode(message.zeroXV1Calls, writer.uint32(90).fork()).ldelim();
    }
    if (message.swapWithUniswapV1Calls !== undefined) {
      SwapWithUniswapAdaptorV1Calls.encode(message.swapWithUniswapV1Calls, writer.uint32(98).fork()).ldelim();
    }
    if (message.vestingSimpleV2Calls !== undefined) {
      VestingSimpleAdaptorV2Calls.encode(message.vestingSimpleV2Calls, writer.uint32(106).fork()).ldelim();
    }
    if (message.cellarV1Calls !== undefined) {
      CellarAdaptorV1Calls.encode(message.cellarV1Calls, writer.uint32(114).fork()).ldelim();
    }
    if (message.uniswapV3V2Calls !== undefined) {
      UniswapV3AdaptorV2Calls.encode(message.uniswapV3V2Calls, writer.uint32(122).fork()).ldelim();
    }
    if (message.aaveV2EnableAssetAsCollateralV1Calls !== undefined) {
      AaveV2EnableAssetAsCollateralAdaptorV1Calls.encode(
        message.aaveV2EnableAssetAsCollateralV1Calls,
        writer.uint32(130).fork(),
      ).ldelim();
    }
    if (message.fTokenV1Calls !== undefined) {
      FTokenAdaptorV1Calls.encode(message.fTokenV1Calls, writer.uint32(138).fork()).ldelim();
    }
    if (message.morphoAaveV2ATokenV1Calls !== undefined) {
      MorphoAaveV2ATokenAdaptorV1Calls.encode(message.morphoAaveV2ATokenV1Calls, writer.uint32(146).fork()).ldelim();
    }
    if (message.morphoAaveV2DebtTokenV1Calls !== undefined) {
      MorphoAaveV2DebtTokenAdaptorV1Calls.encode(message.morphoAaveV2DebtTokenV1Calls, writer.uint32(154).fork())
        .ldelim();
    }
    if (message.morphoAaveV3ATokenCollateralV1Calls !== undefined) {
      MorphoAaveV3ATokenCollateralAdaptorV1Calls.encode(
        message.morphoAaveV3ATokenCollateralV1Calls,
        writer.uint32(162).fork(),
      ).ldelim();
    }
    if (message.morphoAaveV3ATokenP2pV1Calls !== undefined) {
      MorphoAaveV3ATokenP2PAdaptorV1Calls.encode(message.morphoAaveV3ATokenP2pV1Calls, writer.uint32(170).fork())
        .ldelim();
    }
    if (message.morphoAaveV3DebtTokenV1Calls !== undefined) {
      MorphoAaveV3DebtTokenAdaptorV1Calls.encode(message.morphoAaveV3DebtTokenV1Calls, writer.uint32(178).fork())
        .ldelim();
    }
    if (message.balancerPoolV1Calls !== undefined) {
      BalancerPoolAdaptorV1Calls.encode(message.balancerPoolV1Calls, writer.uint32(186).fork()).ldelim();
    }
    if (message.legacyCellarV1Calls !== undefined) {
      LegacyCellarAdaptorV1Calls.encode(message.legacyCellarV1Calls, writer.uint32(194).fork()).ldelim();
    }
    if (message.debtFTokenV1Calls !== undefined) {
      DebtFTokenAdaptorV1Calls.encode(message.debtFTokenV1Calls, writer.uint32(202).fork()).ldelim();
    }
    if (message.collateralFTokenV1Calls !== undefined) {
      CollateralFTokenAdaptorV1Calls.encode(message.collateralFTokenV1Calls, writer.uint32(210).fork()).ldelim();
    }
    if (message.aaveV3DebtTokenV1FlashLoanCalls !== undefined) {
      AaveV3DebtTokenAdaptorV1FlashLoanCalls.encode(message.aaveV3DebtTokenV1FlashLoanCalls, writer.uint32(218).fork())
        .ldelim();
    }
    if (message.balancerPoolV1FlashLoanCalls !== undefined) {
      BalancerPoolAdaptorV1FlashLoanCalls.encode(message.balancerPoolV1FlashLoanCalls, writer.uint32(226).fork())
        .ldelim();
    }
    if (message.convexCurveV1Calls !== undefined) {
      ConvexCurveAdaptorV1Calls.encode(message.convexCurveV1Calls, writer.uint32(234).fork()).ldelim();
    }
    if (message.curveV1Calls !== undefined) {
      CurveAdaptorV1Calls.encode(message.curveV1Calls, writer.uint32(242).fork()).ldelim();
    }
    if (message.auraErc4626V1Calls !== undefined) {
      AuraERC4626AdaptorV1Calls.encode(message.auraErc4626V1Calls, writer.uint32(250).fork()).ldelim();
    }
    if (message.morphoBlueCollateralV1Calls !== undefined) {
      MorphoBlueCollateralAdaptorV1Calls.encode(message.morphoBlueCollateralV1Calls, writer.uint32(258).fork())
        .ldelim();
    }
    if (message.morphoBlueDebtV1Calls !== undefined) {
      MorphoBlueDebtAdaptorV1Calls.encode(message.morphoBlueDebtV1Calls, writer.uint32(266).fork()).ldelim();
    }
    if (message.morphoBlueSupplyV1Calls !== undefined) {
      MorphoBlueSupplyAdaptorV1Calls.encode(message.morphoBlueSupplyV1Calls, writer.uint32(274).fork()).ldelim();
    }
    if (message.erc4626V1Calls !== undefined) {
      ERC4626AdaptorV1Calls.encode(message.erc4626V1Calls, writer.uint32(282).fork()).ldelim();
    }
    if (message.stakingV1Calls !== undefined) {
      StakingAdaptorV1Calls.encode(message.stakingV1Calls, writer.uint32(290).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AdaptorCall {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdaptorCall();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.adaptor = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.aaveATokenV1Calls = AaveATokenAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.aaveDebtTokenV1Calls = AaveDebtTokenAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.compoundCTokenV2Calls = CompoundCTokenAdaptorV2Calls.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.aaveATokenV2Calls = AaveATokenAdaptorV2Calls.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.aaveDebtTokenV2Calls = AaveDebtTokenAdaptorV2Calls.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.aaveV3ATokenV1Calls = AaveV3ATokenAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.aaveV3DebtTokenV1Calls = AaveV3DebtTokenAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.oneInchV1Calls = OneInchAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.feesAndReservesV1Calls = FeesAndReservesAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.zeroXV1Calls = ZeroXAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.swapWithUniswapV1Calls = SwapWithUniswapAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.vestingSimpleV2Calls = VestingSimpleAdaptorV2Calls.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.cellarV1Calls = CellarAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.uniswapV3V2Calls = UniswapV3AdaptorV2Calls.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.aaveV2EnableAssetAsCollateralV1Calls = AaveV2EnableAssetAsCollateralAdaptorV1Calls.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.fTokenV1Calls = FTokenAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.morphoAaveV2ATokenV1Calls = MorphoAaveV2ATokenAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.morphoAaveV2DebtTokenV1Calls = MorphoAaveV2DebtTokenAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.morphoAaveV3ATokenCollateralV1Calls = MorphoAaveV3ATokenCollateralAdaptorV1Calls.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.morphoAaveV3ATokenP2pV1Calls = MorphoAaveV3ATokenP2PAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.morphoAaveV3DebtTokenV1Calls = MorphoAaveV3DebtTokenAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.balancerPoolV1Calls = BalancerPoolAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.legacyCellarV1Calls = LegacyCellarAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.debtFTokenV1Calls = DebtFTokenAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.collateralFTokenV1Calls = CollateralFTokenAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.aaveV3DebtTokenV1FlashLoanCalls = AaveV3DebtTokenAdaptorV1FlashLoanCalls.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 28:
          if (tag !== 226) {
            break;
          }

          message.balancerPoolV1FlashLoanCalls = BalancerPoolAdaptorV1FlashLoanCalls.decode(reader, reader.uint32());
          continue;
        case 29:
          if (tag !== 234) {
            break;
          }

          message.convexCurveV1Calls = ConvexCurveAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 30:
          if (tag !== 242) {
            break;
          }

          message.curveV1Calls = CurveAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 31:
          if (tag !== 250) {
            break;
          }

          message.auraErc4626V1Calls = AuraERC4626AdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 32:
          if (tag !== 258) {
            break;
          }

          message.morphoBlueCollateralV1Calls = MorphoBlueCollateralAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 33:
          if (tag !== 266) {
            break;
          }

          message.morphoBlueDebtV1Calls = MorphoBlueDebtAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 34:
          if (tag !== 274) {
            break;
          }

          message.morphoBlueSupplyV1Calls = MorphoBlueSupplyAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 35:
          if (tag !== 282) {
            break;
          }

          message.erc4626V1Calls = ERC4626AdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 36:
          if (tag !== 290) {
            break;
          }

          message.stakingV1Calls = StakingAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AdaptorCall {
    return {
      adaptor: isSet(object.adaptor) ? globalThis.String(object.adaptor) : "",
      aaveATokenV1Calls: isSet(object.aaveATokenV1Calls)
        ? AaveATokenAdaptorV1Calls.fromJSON(object.aaveATokenV1Calls)
        : undefined,
      aaveDebtTokenV1Calls: isSet(object.aaveDebtTokenV1Calls)
        ? AaveDebtTokenAdaptorV1Calls.fromJSON(object.aaveDebtTokenV1Calls)
        : undefined,
      compoundCTokenV2Calls: isSet(object.compoundCTokenV2Calls)
        ? CompoundCTokenAdaptorV2Calls.fromJSON(object.compoundCTokenV2Calls)
        : undefined,
      aaveATokenV2Calls: isSet(object.aaveATokenV2Calls)
        ? AaveATokenAdaptorV2Calls.fromJSON(object.aaveATokenV2Calls)
        : undefined,
      aaveDebtTokenV2Calls: isSet(object.aaveDebtTokenV2Calls)
        ? AaveDebtTokenAdaptorV2Calls.fromJSON(object.aaveDebtTokenV2Calls)
        : undefined,
      aaveV3ATokenV1Calls: isSet(object.aaveV3ATokenV1Calls)
        ? AaveV3ATokenAdaptorV1Calls.fromJSON(object.aaveV3ATokenV1Calls)
        : undefined,
      aaveV3DebtTokenV1Calls: isSet(object.aaveV3DebtTokenV1Calls)
        ? AaveV3DebtTokenAdaptorV1Calls.fromJSON(object.aaveV3DebtTokenV1Calls)
        : undefined,
      oneInchV1Calls: isSet(object.oneInchV1Calls) ? OneInchAdaptorV1Calls.fromJSON(object.oneInchV1Calls) : undefined,
      feesAndReservesV1Calls: isSet(object.feesAndReservesV1Calls)
        ? FeesAndReservesAdaptorV1Calls.fromJSON(object.feesAndReservesV1Calls)
        : undefined,
      zeroXV1Calls: isSet(object.zeroXV1Calls) ? ZeroXAdaptorV1Calls.fromJSON(object.zeroXV1Calls) : undefined,
      swapWithUniswapV1Calls: isSet(object.swapWithUniswapV1Calls)
        ? SwapWithUniswapAdaptorV1Calls.fromJSON(object.swapWithUniswapV1Calls)
        : undefined,
      vestingSimpleV2Calls: isSet(object.vestingSimpleV2Calls)
        ? VestingSimpleAdaptorV2Calls.fromJSON(object.vestingSimpleV2Calls)
        : undefined,
      cellarV1Calls: isSet(object.cellarV1Calls) ? CellarAdaptorV1Calls.fromJSON(object.cellarV1Calls) : undefined,
      uniswapV3V2Calls: isSet(object.uniswapV3V2Calls)
        ? UniswapV3AdaptorV2Calls.fromJSON(object.uniswapV3V2Calls)
        : undefined,
      aaveV2EnableAssetAsCollateralV1Calls: isSet(object.aaveV2EnableAssetAsCollateralV1Calls)
        ? AaveV2EnableAssetAsCollateralAdaptorV1Calls.fromJSON(object.aaveV2EnableAssetAsCollateralV1Calls)
        : undefined,
      fTokenV1Calls: isSet(object.fTokenV1Calls) ? FTokenAdaptorV1Calls.fromJSON(object.fTokenV1Calls) : undefined,
      morphoAaveV2ATokenV1Calls: isSet(object.morphoAaveV2ATokenV1Calls)
        ? MorphoAaveV2ATokenAdaptorV1Calls.fromJSON(object.morphoAaveV2ATokenV1Calls)
        : undefined,
      morphoAaveV2DebtTokenV1Calls: isSet(object.morphoAaveV2DebtTokenV1Calls)
        ? MorphoAaveV2DebtTokenAdaptorV1Calls.fromJSON(object.morphoAaveV2DebtTokenV1Calls)
        : undefined,
      morphoAaveV3ATokenCollateralV1Calls: isSet(object.morphoAaveV3ATokenCollateralV1Calls)
        ? MorphoAaveV3ATokenCollateralAdaptorV1Calls.fromJSON(object.morphoAaveV3ATokenCollateralV1Calls)
        : undefined,
      morphoAaveV3ATokenP2pV1Calls: isSet(object.morphoAaveV3ATokenP2pV1Calls)
        ? MorphoAaveV3ATokenP2PAdaptorV1Calls.fromJSON(object.morphoAaveV3ATokenP2pV1Calls)
        : undefined,
      morphoAaveV3DebtTokenV1Calls: isSet(object.morphoAaveV3DebtTokenV1Calls)
        ? MorphoAaveV3DebtTokenAdaptorV1Calls.fromJSON(object.morphoAaveV3DebtTokenV1Calls)
        : undefined,
      balancerPoolV1Calls: isSet(object.balancerPoolV1Calls)
        ? BalancerPoolAdaptorV1Calls.fromJSON(object.balancerPoolV1Calls)
        : undefined,
      legacyCellarV1Calls: isSet(object.legacyCellarV1Calls)
        ? LegacyCellarAdaptorV1Calls.fromJSON(object.legacyCellarV1Calls)
        : undefined,
      debtFTokenV1Calls: isSet(object.debtFTokenV1Calls)
        ? DebtFTokenAdaptorV1Calls.fromJSON(object.debtFTokenV1Calls)
        : undefined,
      collateralFTokenV1Calls: isSet(object.collateralFTokenV1Calls)
        ? CollateralFTokenAdaptorV1Calls.fromJSON(object.collateralFTokenV1Calls)
        : undefined,
      aaveV3DebtTokenV1FlashLoanCalls: isSet(object.aaveV3DebtTokenV1FlashLoanCalls)
        ? AaveV3DebtTokenAdaptorV1FlashLoanCalls.fromJSON(object.aaveV3DebtTokenV1FlashLoanCalls)
        : undefined,
      balancerPoolV1FlashLoanCalls: isSet(object.balancerPoolV1FlashLoanCalls)
        ? BalancerPoolAdaptorV1FlashLoanCalls.fromJSON(object.balancerPoolV1FlashLoanCalls)
        : undefined,
      convexCurveV1Calls: isSet(object.convexCurveV1Calls)
        ? ConvexCurveAdaptorV1Calls.fromJSON(object.convexCurveV1Calls)
        : undefined,
      curveV1Calls: isSet(object.curveV1Calls) ? CurveAdaptorV1Calls.fromJSON(object.curveV1Calls) : undefined,
      auraErc4626V1Calls: isSet(object.auraErc4626V1Calls)
        ? AuraERC4626AdaptorV1Calls.fromJSON(object.auraErc4626V1Calls)
        : undefined,
      morphoBlueCollateralV1Calls: isSet(object.morphoBlueCollateralV1Calls)
        ? MorphoBlueCollateralAdaptorV1Calls.fromJSON(object.morphoBlueCollateralV1Calls)
        : undefined,
      morphoBlueDebtV1Calls: isSet(object.morphoBlueDebtV1Calls)
        ? MorphoBlueDebtAdaptorV1Calls.fromJSON(object.morphoBlueDebtV1Calls)
        : undefined,
      morphoBlueSupplyV1Calls: isSet(object.morphoBlueSupplyV1Calls)
        ? MorphoBlueSupplyAdaptorV1Calls.fromJSON(object.morphoBlueSupplyV1Calls)
        : undefined,
      erc4626V1Calls: isSet(object.erc4626V1Calls) ? ERC4626AdaptorV1Calls.fromJSON(object.erc4626V1Calls) : undefined,
      stakingV1Calls: isSet(object.stakingV1Calls) ? StakingAdaptorV1Calls.fromJSON(object.stakingV1Calls) : undefined,
    };
  },

  toJSON(message: AdaptorCall): unknown {
    const obj: any = {};
    if (message.adaptor !== "") {
      obj.adaptor = message.adaptor;
    }
    if (message.aaveATokenV1Calls !== undefined) {
      obj.aaveATokenV1Calls = AaveATokenAdaptorV1Calls.toJSON(message.aaveATokenV1Calls);
    }
    if (message.aaveDebtTokenV1Calls !== undefined) {
      obj.aaveDebtTokenV1Calls = AaveDebtTokenAdaptorV1Calls.toJSON(message.aaveDebtTokenV1Calls);
    }
    if (message.compoundCTokenV2Calls !== undefined) {
      obj.compoundCTokenV2Calls = CompoundCTokenAdaptorV2Calls.toJSON(message.compoundCTokenV2Calls);
    }
    if (message.aaveATokenV2Calls !== undefined) {
      obj.aaveATokenV2Calls = AaveATokenAdaptorV2Calls.toJSON(message.aaveATokenV2Calls);
    }
    if (message.aaveDebtTokenV2Calls !== undefined) {
      obj.aaveDebtTokenV2Calls = AaveDebtTokenAdaptorV2Calls.toJSON(message.aaveDebtTokenV2Calls);
    }
    if (message.aaveV3ATokenV1Calls !== undefined) {
      obj.aaveV3ATokenV1Calls = AaveV3ATokenAdaptorV1Calls.toJSON(message.aaveV3ATokenV1Calls);
    }
    if (message.aaveV3DebtTokenV1Calls !== undefined) {
      obj.aaveV3DebtTokenV1Calls = AaveV3DebtTokenAdaptorV1Calls.toJSON(message.aaveV3DebtTokenV1Calls);
    }
    if (message.oneInchV1Calls !== undefined) {
      obj.oneInchV1Calls = OneInchAdaptorV1Calls.toJSON(message.oneInchV1Calls);
    }
    if (message.feesAndReservesV1Calls !== undefined) {
      obj.feesAndReservesV1Calls = FeesAndReservesAdaptorV1Calls.toJSON(message.feesAndReservesV1Calls);
    }
    if (message.zeroXV1Calls !== undefined) {
      obj.zeroXV1Calls = ZeroXAdaptorV1Calls.toJSON(message.zeroXV1Calls);
    }
    if (message.swapWithUniswapV1Calls !== undefined) {
      obj.swapWithUniswapV1Calls = SwapWithUniswapAdaptorV1Calls.toJSON(message.swapWithUniswapV1Calls);
    }
    if (message.vestingSimpleV2Calls !== undefined) {
      obj.vestingSimpleV2Calls = VestingSimpleAdaptorV2Calls.toJSON(message.vestingSimpleV2Calls);
    }
    if (message.cellarV1Calls !== undefined) {
      obj.cellarV1Calls = CellarAdaptorV1Calls.toJSON(message.cellarV1Calls);
    }
    if (message.uniswapV3V2Calls !== undefined) {
      obj.uniswapV3V2Calls = UniswapV3AdaptorV2Calls.toJSON(message.uniswapV3V2Calls);
    }
    if (message.aaveV2EnableAssetAsCollateralV1Calls !== undefined) {
      obj.aaveV2EnableAssetAsCollateralV1Calls = AaveV2EnableAssetAsCollateralAdaptorV1Calls.toJSON(
        message.aaveV2EnableAssetAsCollateralV1Calls,
      );
    }
    if (message.fTokenV1Calls !== undefined) {
      obj.fTokenV1Calls = FTokenAdaptorV1Calls.toJSON(message.fTokenV1Calls);
    }
    if (message.morphoAaveV2ATokenV1Calls !== undefined) {
      obj.morphoAaveV2ATokenV1Calls = MorphoAaveV2ATokenAdaptorV1Calls.toJSON(message.morphoAaveV2ATokenV1Calls);
    }
    if (message.morphoAaveV2DebtTokenV1Calls !== undefined) {
      obj.morphoAaveV2DebtTokenV1Calls = MorphoAaveV2DebtTokenAdaptorV1Calls.toJSON(
        message.morphoAaveV2DebtTokenV1Calls,
      );
    }
    if (message.morphoAaveV3ATokenCollateralV1Calls !== undefined) {
      obj.morphoAaveV3ATokenCollateralV1Calls = MorphoAaveV3ATokenCollateralAdaptorV1Calls.toJSON(
        message.morphoAaveV3ATokenCollateralV1Calls,
      );
    }
    if (message.morphoAaveV3ATokenP2pV1Calls !== undefined) {
      obj.morphoAaveV3ATokenP2pV1Calls = MorphoAaveV3ATokenP2PAdaptorV1Calls.toJSON(
        message.morphoAaveV3ATokenP2pV1Calls,
      );
    }
    if (message.morphoAaveV3DebtTokenV1Calls !== undefined) {
      obj.morphoAaveV3DebtTokenV1Calls = MorphoAaveV3DebtTokenAdaptorV1Calls.toJSON(
        message.morphoAaveV3DebtTokenV1Calls,
      );
    }
    if (message.balancerPoolV1Calls !== undefined) {
      obj.balancerPoolV1Calls = BalancerPoolAdaptorV1Calls.toJSON(message.balancerPoolV1Calls);
    }
    if (message.legacyCellarV1Calls !== undefined) {
      obj.legacyCellarV1Calls = LegacyCellarAdaptorV1Calls.toJSON(message.legacyCellarV1Calls);
    }
    if (message.debtFTokenV1Calls !== undefined) {
      obj.debtFTokenV1Calls = DebtFTokenAdaptorV1Calls.toJSON(message.debtFTokenV1Calls);
    }
    if (message.collateralFTokenV1Calls !== undefined) {
      obj.collateralFTokenV1Calls = CollateralFTokenAdaptorV1Calls.toJSON(message.collateralFTokenV1Calls);
    }
    if (message.aaveV3DebtTokenV1FlashLoanCalls !== undefined) {
      obj.aaveV3DebtTokenV1FlashLoanCalls = AaveV3DebtTokenAdaptorV1FlashLoanCalls.toJSON(
        message.aaveV3DebtTokenV1FlashLoanCalls,
      );
    }
    if (message.balancerPoolV1FlashLoanCalls !== undefined) {
      obj.balancerPoolV1FlashLoanCalls = BalancerPoolAdaptorV1FlashLoanCalls.toJSON(
        message.balancerPoolV1FlashLoanCalls,
      );
    }
    if (message.convexCurveV1Calls !== undefined) {
      obj.convexCurveV1Calls = ConvexCurveAdaptorV1Calls.toJSON(message.convexCurveV1Calls);
    }
    if (message.curveV1Calls !== undefined) {
      obj.curveV1Calls = CurveAdaptorV1Calls.toJSON(message.curveV1Calls);
    }
    if (message.auraErc4626V1Calls !== undefined) {
      obj.auraErc4626V1Calls = AuraERC4626AdaptorV1Calls.toJSON(message.auraErc4626V1Calls);
    }
    if (message.morphoBlueCollateralV1Calls !== undefined) {
      obj.morphoBlueCollateralV1Calls = MorphoBlueCollateralAdaptorV1Calls.toJSON(message.morphoBlueCollateralV1Calls);
    }
    if (message.morphoBlueDebtV1Calls !== undefined) {
      obj.morphoBlueDebtV1Calls = MorphoBlueDebtAdaptorV1Calls.toJSON(message.morphoBlueDebtV1Calls);
    }
    if (message.morphoBlueSupplyV1Calls !== undefined) {
      obj.morphoBlueSupplyV1Calls = MorphoBlueSupplyAdaptorV1Calls.toJSON(message.morphoBlueSupplyV1Calls);
    }
    if (message.erc4626V1Calls !== undefined) {
      obj.erc4626V1Calls = ERC4626AdaptorV1Calls.toJSON(message.erc4626V1Calls);
    }
    if (message.stakingV1Calls !== undefined) {
      obj.stakingV1Calls = StakingAdaptorV1Calls.toJSON(message.stakingV1Calls);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AdaptorCall>, I>>(base?: I): AdaptorCall {
    return AdaptorCall.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AdaptorCall>, I>>(object: I): AdaptorCall {
    const message = createBaseAdaptorCall();
    message.adaptor = object.adaptor ?? "";
    message.aaveATokenV1Calls = (object.aaveATokenV1Calls !== undefined && object.aaveATokenV1Calls !== null)
      ? AaveATokenAdaptorV1Calls.fromPartial(object.aaveATokenV1Calls)
      : undefined;
    message.aaveDebtTokenV1Calls = (object.aaveDebtTokenV1Calls !== undefined && object.aaveDebtTokenV1Calls !== null)
      ? AaveDebtTokenAdaptorV1Calls.fromPartial(object.aaveDebtTokenV1Calls)
      : undefined;
    message.compoundCTokenV2Calls =
      (object.compoundCTokenV2Calls !== undefined && object.compoundCTokenV2Calls !== null)
        ? CompoundCTokenAdaptorV2Calls.fromPartial(object.compoundCTokenV2Calls)
        : undefined;
    message.aaveATokenV2Calls = (object.aaveATokenV2Calls !== undefined && object.aaveATokenV2Calls !== null)
      ? AaveATokenAdaptorV2Calls.fromPartial(object.aaveATokenV2Calls)
      : undefined;
    message.aaveDebtTokenV2Calls = (object.aaveDebtTokenV2Calls !== undefined && object.aaveDebtTokenV2Calls !== null)
      ? AaveDebtTokenAdaptorV2Calls.fromPartial(object.aaveDebtTokenV2Calls)
      : undefined;
    message.aaveV3ATokenV1Calls = (object.aaveV3ATokenV1Calls !== undefined && object.aaveV3ATokenV1Calls !== null)
      ? AaveV3ATokenAdaptorV1Calls.fromPartial(object.aaveV3ATokenV1Calls)
      : undefined;
    message.aaveV3DebtTokenV1Calls =
      (object.aaveV3DebtTokenV1Calls !== undefined && object.aaveV3DebtTokenV1Calls !== null)
        ? AaveV3DebtTokenAdaptorV1Calls.fromPartial(object.aaveV3DebtTokenV1Calls)
        : undefined;
    message.oneInchV1Calls = (object.oneInchV1Calls !== undefined && object.oneInchV1Calls !== null)
      ? OneInchAdaptorV1Calls.fromPartial(object.oneInchV1Calls)
      : undefined;
    message.feesAndReservesV1Calls =
      (object.feesAndReservesV1Calls !== undefined && object.feesAndReservesV1Calls !== null)
        ? FeesAndReservesAdaptorV1Calls.fromPartial(object.feesAndReservesV1Calls)
        : undefined;
    message.zeroXV1Calls = (object.zeroXV1Calls !== undefined && object.zeroXV1Calls !== null)
      ? ZeroXAdaptorV1Calls.fromPartial(object.zeroXV1Calls)
      : undefined;
    message.swapWithUniswapV1Calls =
      (object.swapWithUniswapV1Calls !== undefined && object.swapWithUniswapV1Calls !== null)
        ? SwapWithUniswapAdaptorV1Calls.fromPartial(object.swapWithUniswapV1Calls)
        : undefined;
    message.vestingSimpleV2Calls = (object.vestingSimpleV2Calls !== undefined && object.vestingSimpleV2Calls !== null)
      ? VestingSimpleAdaptorV2Calls.fromPartial(object.vestingSimpleV2Calls)
      : undefined;
    message.cellarV1Calls = (object.cellarV1Calls !== undefined && object.cellarV1Calls !== null)
      ? CellarAdaptorV1Calls.fromPartial(object.cellarV1Calls)
      : undefined;
    message.uniswapV3V2Calls = (object.uniswapV3V2Calls !== undefined && object.uniswapV3V2Calls !== null)
      ? UniswapV3AdaptorV2Calls.fromPartial(object.uniswapV3V2Calls)
      : undefined;
    message.aaveV2EnableAssetAsCollateralV1Calls =
      (object.aaveV2EnableAssetAsCollateralV1Calls !== undefined &&
          object.aaveV2EnableAssetAsCollateralV1Calls !== null)
        ? AaveV2EnableAssetAsCollateralAdaptorV1Calls.fromPartial(object.aaveV2EnableAssetAsCollateralV1Calls)
        : undefined;
    message.fTokenV1Calls = (object.fTokenV1Calls !== undefined && object.fTokenV1Calls !== null)
      ? FTokenAdaptorV1Calls.fromPartial(object.fTokenV1Calls)
      : undefined;
    message.morphoAaveV2ATokenV1Calls =
      (object.morphoAaveV2ATokenV1Calls !== undefined && object.morphoAaveV2ATokenV1Calls !== null)
        ? MorphoAaveV2ATokenAdaptorV1Calls.fromPartial(object.morphoAaveV2ATokenV1Calls)
        : undefined;
    message.morphoAaveV2DebtTokenV1Calls =
      (object.morphoAaveV2DebtTokenV1Calls !== undefined && object.morphoAaveV2DebtTokenV1Calls !== null)
        ? MorphoAaveV2DebtTokenAdaptorV1Calls.fromPartial(object.morphoAaveV2DebtTokenV1Calls)
        : undefined;
    message.morphoAaveV3ATokenCollateralV1Calls =
      (object.morphoAaveV3ATokenCollateralV1Calls !== undefined && object.morphoAaveV3ATokenCollateralV1Calls !== null)
        ? MorphoAaveV3ATokenCollateralAdaptorV1Calls.fromPartial(object.morphoAaveV3ATokenCollateralV1Calls)
        : undefined;
    message.morphoAaveV3ATokenP2pV1Calls =
      (object.morphoAaveV3ATokenP2pV1Calls !== undefined && object.morphoAaveV3ATokenP2pV1Calls !== null)
        ? MorphoAaveV3ATokenP2PAdaptorV1Calls.fromPartial(object.morphoAaveV3ATokenP2pV1Calls)
        : undefined;
    message.morphoAaveV3DebtTokenV1Calls =
      (object.morphoAaveV3DebtTokenV1Calls !== undefined && object.morphoAaveV3DebtTokenV1Calls !== null)
        ? MorphoAaveV3DebtTokenAdaptorV1Calls.fromPartial(object.morphoAaveV3DebtTokenV1Calls)
        : undefined;
    message.balancerPoolV1Calls = (object.balancerPoolV1Calls !== undefined && object.balancerPoolV1Calls !== null)
      ? BalancerPoolAdaptorV1Calls.fromPartial(object.balancerPoolV1Calls)
      : undefined;
    message.legacyCellarV1Calls = (object.legacyCellarV1Calls !== undefined && object.legacyCellarV1Calls !== null)
      ? LegacyCellarAdaptorV1Calls.fromPartial(object.legacyCellarV1Calls)
      : undefined;
    message.debtFTokenV1Calls = (object.debtFTokenV1Calls !== undefined && object.debtFTokenV1Calls !== null)
      ? DebtFTokenAdaptorV1Calls.fromPartial(object.debtFTokenV1Calls)
      : undefined;
    message.collateralFTokenV1Calls =
      (object.collateralFTokenV1Calls !== undefined && object.collateralFTokenV1Calls !== null)
        ? CollateralFTokenAdaptorV1Calls.fromPartial(object.collateralFTokenV1Calls)
        : undefined;
    message.aaveV3DebtTokenV1FlashLoanCalls =
      (object.aaveV3DebtTokenV1FlashLoanCalls !== undefined && object.aaveV3DebtTokenV1FlashLoanCalls !== null)
        ? AaveV3DebtTokenAdaptorV1FlashLoanCalls.fromPartial(object.aaveV3DebtTokenV1FlashLoanCalls)
        : undefined;
    message.balancerPoolV1FlashLoanCalls =
      (object.balancerPoolV1FlashLoanCalls !== undefined && object.balancerPoolV1FlashLoanCalls !== null)
        ? BalancerPoolAdaptorV1FlashLoanCalls.fromPartial(object.balancerPoolV1FlashLoanCalls)
        : undefined;
    message.convexCurveV1Calls = (object.convexCurveV1Calls !== undefined && object.convexCurveV1Calls !== null)
      ? ConvexCurveAdaptorV1Calls.fromPartial(object.convexCurveV1Calls)
      : undefined;
    message.curveV1Calls = (object.curveV1Calls !== undefined && object.curveV1Calls !== null)
      ? CurveAdaptorV1Calls.fromPartial(object.curveV1Calls)
      : undefined;
    message.auraErc4626V1Calls = (object.auraErc4626V1Calls !== undefined && object.auraErc4626V1Calls !== null)
      ? AuraERC4626AdaptorV1Calls.fromPartial(object.auraErc4626V1Calls)
      : undefined;
    message.morphoBlueCollateralV1Calls =
      (object.morphoBlueCollateralV1Calls !== undefined && object.morphoBlueCollateralV1Calls !== null)
        ? MorphoBlueCollateralAdaptorV1Calls.fromPartial(object.morphoBlueCollateralV1Calls)
        : undefined;
    message.morphoBlueDebtV1Calls =
      (object.morphoBlueDebtV1Calls !== undefined && object.morphoBlueDebtV1Calls !== null)
        ? MorphoBlueDebtAdaptorV1Calls.fromPartial(object.morphoBlueDebtV1Calls)
        : undefined;
    message.morphoBlueSupplyV1Calls =
      (object.morphoBlueSupplyV1Calls !== undefined && object.morphoBlueSupplyV1Calls !== null)
        ? MorphoBlueSupplyAdaptorV1Calls.fromPartial(object.morphoBlueSupplyV1Calls)
        : undefined;
    message.erc4626V1Calls = (object.erc4626V1Calls !== undefined && object.erc4626V1Calls !== null)
      ? ERC4626AdaptorV1Calls.fromPartial(object.erc4626V1Calls)
      : undefined;
    message.stakingV1Calls = (object.stakingV1Calls !== undefined && object.stakingV1Calls !== null)
      ? StakingAdaptorV1Calls.fromPartial(object.stakingV1Calls)
      : undefined;
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if ((globalThis as any).Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
