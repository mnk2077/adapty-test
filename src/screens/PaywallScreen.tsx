import {useAdaptyPaywall} from "../utils/hooks/useAdaptyPaywall.ts";

export const PaywallScreen = () => {
  const paywallView = useAdaptyPaywall()

  // const paywallListeners = paywallView?.registerEventHandlers({
  //   onCloseButtonPress() {
  //     return true
  //   },
  //   onPurchaseCompleted(profile) {
  //     return true
  //   },
  //   onPurchaseStarted(product) {
  //     /***/
  //   },
  //   onPurchaseCancelled(product) {
  //     /***/
  //   },
  //   onPurchaseFailed(error) {
  //     /***/
  //   },
  //   onRestoreCompleted(profile) {
  //     /***/
  //   },
  //   onRestoreFailed(error) {
  //     /***/
  //   },
  //   onProductSelected() {
  //     /***/
  //   },
  //   onRenderingFailed(error) {
  //     /***/
  //   },
  //   onLoadingProductsFailed(error) {
  //     /***/
  //   },
  //   onUrlPress(url) {
  //     /* handle url */
  //   },
  // })

  return <>{paywallView ? paywallView.present() : <></>}</>
}
