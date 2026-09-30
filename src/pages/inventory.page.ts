import { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class InventoryPage extends BasePage {
  private readonly cartLink: Locator;
  public readonly cartBadge: Locator;

  constructor(page: Page) {
    super(page);
    this.cartLink = page.locator('.shopping_cart_link');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async addProductToCart(productName: string) {
    const product = this.page
      .locator('.inventory_item')
      .filter({ has: this.page.getByText(productName, { exact: true }) });
    await product.getByRole('button', { name: 'Add to cart' }).click();
  }

  async getCartItemByName(productName: string) {
    await this.cartLink.click();
    return this.page
      .locator('.cart_item')
      .filter({ has: this.page.getByText(productName, { exact: true }) });
  }
}