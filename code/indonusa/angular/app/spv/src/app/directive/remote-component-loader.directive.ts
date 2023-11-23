// remote-component-loader.directive.ts

import {
  Directive,
  Input,
  ViewContainerRef,
  ComponentFactoryResolver,
  Compiler,
  Injector,
  Inject,
  ReflectiveInjector,
  Type,
} from '@angular/core';

@Directive({
  selector: '[appRemoteComponentLoader]',
})
export class RemoteComponentLoaderDirective {
  @Input() remoteEntry: string;
  @Input() remoteName: string;
  @Input() exposedModule: string;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private compiler: Compiler,
    private injector: Injector
  ) {}

  async ngOnInit(): Promise<void> {
    await this.loadRemoteComponent();
  }

  private async loadRemoteComponent(): Promise<void> {
    try {
      // Load the remote module using Module Federation
      const module = await import(this.remoteEntry);

      // Get the component type from the remote module
      const componentType: Type<any> = module[this.exposedModule];

      // Compile the component
      const moduleWithComponentFactory = await this.compiler.compileModuleAndAllComponentsAsync(module);

      // Find the component factory
      const componentFactory = moduleWithComponentFactory.componentFactories.find(
        (factory) => factory.componentType === componentType
      );

      // Create and attach the component to the view
      const componentRef = this.viewContainerRef.createComponent(
        componentFactory,
        0,
        this.injector,
        this.generateNgContent()
      );

      // Optionally, you can pass inputs to the dynamically loaded component
      // componentRef.instance.someInput = 'some value';
    } catch (error) {
      console.error('Error loading remote component:', error);
    }
  }

  private generateNgContent(): any[][] {
    // You can customize this method to generate ng-content if needed.
    return [];
  }
}
